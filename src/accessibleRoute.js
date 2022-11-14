import { piService } from "./piService"

export async function accessibleRoute() {
  const venueId = "0515727397f53978a128ef2ba0823dbe"

  // show map
  const venue = await piService.getVenueById({ venueId })
  const pimap = new PointInside.PiMap({
    element: document.querySelector("#map"),
    service: piService
  })
  await pimap.setVenue({ venue })
  // fetch route
  const route = await piService.routeWaypoints(
    { venueId, travelMode: "wheelchair" },
    {
      start: { type: "Place", place: "44f8541f1af442b39db4de8c38df861d" },
      end: { type: "Place", place: "1d7980fd72d542da8c6795de2fceb04b" }
    }
  )
  // show route
  pimap.setCenter(route.start)
  // add markers
  pimap.addMarker({ color: "green", location: route.start })
  pimap.addMarker({ color: "red", location: route.end })
  // display route on the map
  pimap.addRoute({ route })
}
