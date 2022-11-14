import { piService } from "./piService"

export async function mapClick() {
  const venueId = "SEA"

  // load map
  const venue = await piService.getVenueById({ venueId })
  const pimap = new PointInside.PiMap({
    element: document.querySelector("#map"),
    service: piService
  })
  await pimap.setVenue({ venue })

  // add tap listener
  pimap.addListener("tap", async function (ev) {
    pimap.removeMarkers()
    pimap.addMarker({ location: ev.mapCoords })
  })
}
