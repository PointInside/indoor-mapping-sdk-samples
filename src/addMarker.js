import { piService } from "./piService"

export async function addMarker() {
  const venueId = "SEA"
  // show map
  const venue = await piService.getVenueById({ venueId })
  const pimap = new PointInside.PiMap({
    element: document.querySelector("#map"),
    service: piService
  })
  await pimap.setVenue({ venue })
  // add marker
  pimap.addMarker({
    location: { x: 2000, y: 2000, zone: pimap.getCurrentZoneId() }
  })
}
