import { piService } from "./piService"

// markers - see styles.css class props
const objectMarker = {
  content: `<div class='objectMarker'></div>`,
  width: 12,
  height: 12,
  centerX: 6,
  centerY: 6
}

const groupMarker = {
  content: `<div class='groupMarker'>#TEXT#</div>`,
  width: 12,
  height: 12,
  centerX: 6,
  centerY: 6
}

export async function markerGrouping() {
  const venueId = "4f876ba5a10533cdadd730413fa44b42"

  // load map
  const venue = await piService.getVenueById({ venueId })
  const pimap = new PointInside.PiMap({
    element: document.querySelector("#map"),
    service: piService
  })
  await pimap.setVenue({ venue })
  alert("Click map to add markers. Zoom in and out to see grouping behavior.")

  const groupController = pimap.enableMarkerGrouping({
    markerType: groupMarker
  })
  groupController.addListener("click", function (ev) {
    for (const marker of this.groupedMarkers) {
      console.log("Context", marker.context)
    }
  })
  // add tap listener
  pimap.addListener("tap", async function (ev) {
    pimap.addMarker({ location: ev.mapCoords, markerType: objectMarker })
  })
}
