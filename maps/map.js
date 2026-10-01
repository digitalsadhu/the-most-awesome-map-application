if (UnminedCustomMarkers && UnminedCustomMarkers.isEnabled && UnminedCustomMarkers.markers) {
  UnminedMapProperties.markers = UnminedMapProperties.markers.concat(UnminedCustomMarkers.markers);
}

if (UnminedPlayers && UnminedPlayers.length > 0) {
  UnminedMapProperties.playerMarkers = Unmined.createPlayerMarkers(UnminedPlayers);
}

const mapElement = document.getElementById('map');
const allMarkers = [...UnminedCustomMarkers.markers];
let unmined = new Unmined(mapElement, UnminedMapProperties, UnminedRegions);

let zoomControls = document.querySelector('.ol-zoom');
if (zoomControls) {
  zoomControls.remove();
  document.getElementById('zoom-controls-container').appendChild(zoomControls);
  document.querySelector('.ol-zoom-in').innerHTML = `
                <span class="visually-hidden">Zoom in</span>
                <img src="/icons/plus.svg" alt="plus">
            `;
  document.querySelector('.ol-zoom-out').innerHTML = `
                <span class="visually-hidden">Zoom out</span>
                <img height="16px" width="16px" src="/icons/minus.svg" alt="minus">
            `;
}

// populate the two marker type filters with options
const markerFilters = document.querySelectorAll('fieldset[name="marker-types"]');
const markerTypes = Object.entries(PINS);
for (const [markerType, { image, name }] of markerTypes) {
  for (const markerFilter of markerFilters) {
    const option = document.createElement("div");
    const label = name;
    option.dataset.value = markerType;
    option.innerHTML = `
                    <label>
                        <img height="24px" width="16px" src="/${image}" alt="">
                        <input type="checkbox" value="${markerType}" class="visually-hidden">
                        <span class="label">${label}</span>
                    </label>
                `;
    markerFilter.appendChild(option);
  }
}

// add the full list of points of interest to the search results
const searchPopover = document.getElementById("poi-search");
const searchResults = document.getElementById("search-results");
for (const marker of UnminedMapProperties.markers) {
  if (!marker.text) continue;
  const listentry = document.createElement("li");
  listentry.dataset.type = marker.type || 'other'; // used for markers type filters

  const label = marker.text.replaceAll("\n", " ");

  const poiButton = document.createElement("button");
  poiButton.type = "button";
  poiButton.innerHTML = `
                <img height="24px" width="16px" src="/${PINS[marker.type]?.image || "other.png"}" alt="">
                <span>${label}</span>
            `;
  poiButton.addEventListener("click", () => {
    unmined.center([
      marker.x,
      marker.z,
    ]);
    searchPopover.togglePopover();
  });

  listentry.appendChild(poiButton);
  searchResults.appendChild(listentry);
}

function showSearchResults(inputValue = "") {
  // start with all results hidden
  document.querySelectorAll('#search-results li').forEach((el) => el.hidden = true);

  if (!inputValue) {
    // make all results visible when filter is empty unless they are filtered out by type
    document.querySelectorAll('#search-results li').forEach((el) => {
      if (visibleMarkerTypes.includes(el.dataset.type)) {
        el.hidden = false;
      }
    });
  } else {
    // show fuzzy matches unless they are filtered out by type
    const matches = fuzzysort.go(inputValue, UnminedMapProperties.markers, { key: 'text' });
    if (matches.length) {
      for (const match of matches) {
        const marker = match.obj;
        const markerType = marker.type || 'other';

        // skip matches for marker types we have filtered out
        if (!visibleMarkerTypes.includes(markerType)) {
          continue;
        }

        const label = marker.text.replaceAll("\n", " ");
        document.querySelectorAll('#search-results li').forEach((el) => {
          if (el.innerText.includes(label)) {
            el.hidden = false;
          }
        });
      }
    }
  }
}

let visibleMarkerTypes = Object.keys(PINS);
const markerFilterPopoverTrigger = document.querySelector('button[popovertarget="marker-filters"]');
const poiFilter = document.querySelector('input[name="poi-filter"]');

// do fuzzy matching to filter visible search results
poiFilter.addEventListener("input", (e) => {
  showSearchResults(e.target.value);
});

// keep track of the marker filter states and keep the two lists in sync
const [searchMarkerFilter, standaloneMarkerFilter] = markerFilters;
searchMarkerFilter.addEventListener('change', function (e) {
  const checkedOptions = this.querySelectorAll('input:checked');
  visibleMarkerTypes = [];
  for (const option of checkedOptions) {
    visibleMarkerTypes.push(option.value);
  }
  if (visibleMarkerTypes.length === 0) {
    visibleMarkerTypes = Object.keys(PINS);
    standaloneMarkerFilter.querySelectorAll('input').forEach((el) => {
        el.checked = false;
    });
  } else {
    standaloneMarkerFilter.querySelectorAll('input').forEach((el) => {
      if (visibleMarkerTypes.includes(el.value)) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
  }
  // refresh the list of visible points of interest after changing this set
  showSearchResults(poiFilter.value);
});
standaloneMarkerFilter.addEventListener('change', function (e) {
  const checkedOptions = this.querySelectorAll('input:checked');
  visibleMarkerTypes = [];
  for (const option of checkedOptions) {
    visibleMarkerTypes.push(option.value);
  }
  if (visibleMarkerTypes.length === 0) {
    visibleMarkerTypes = Object.keys(PINS);
    searchMarkerFilter.querySelectorAll('input').forEach((el) => {
        el.checked = false;
    });
    delete markerFilterPopoverTrigger.dataset.activeFilters;
  } else {
    markerFilterPopoverTrigger.dataset.activeFilters = visibleMarkerTypes.length;
    searchMarkerFilter.querySelectorAll('input').forEach((el) => {
      if (visibleMarkerTypes.includes(el.value)) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
  }
  // refresh the list of visible points of interest after changing this set
  showSearchResults(poiFilter.value);
  // update the list of visible markers on the map by recreating it
  unmined.olMap.removeLayer(unmined.markersLayer);
  const markers = [...allMarkers].filter((marker) => {
    if (visibleMarkerTypes.includes(marker.type || 'other')) {
      return true;
    }
    return false;
  })
  unmined.markersLayer = unmined.createMarkersLayer(markers);
  unmined.olMap.addLayer(unmined.markersLayer);
});

searchMarkerFilter.querySelectorAll('.label').forEach(el => el.classList.add('visually-hidden'));

document.getElementById("clear-filter").addEventListener("click", () => {
  poiFilter.value = "";
  visibleMarkerTypes = Object.keys(PINS);
  searchMarkerFilter.querySelectorAll('input').forEach((el) => {
    el.checked = false;
  });
  standaloneMarkerFilter.querySelectorAll('input').forEach((el) => {
    el.checked = false;
  });
  showSearchResults("");
  // update the list of visible markers on the map by recreating it
  unmined.olMap.removeLayer(unmined.markersLayer);
  const markers = [...allMarkers].filter((marker) => {
    if (visibleMarkerTypes.includes(marker.type || 'other')) {
      return true;
    }
    return false;
  })
  unmined.markersLayer = unmined.createMarkersLayer(markers);
  unmined.olMap.addLayer(unmined.markersLayer);
});
