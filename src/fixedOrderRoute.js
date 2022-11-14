import { piService } from "./piService"

export async function fixedOrderRoute() {
  const venueId = "SEA"

  // show map
  const venue = await piService.getVenueById({ venueId })
  const pimap = new PointInside.PiMap({
    element: document.querySelector("#map"),
    service: piService
  })
  await pimap.setVenue({ venue })
  // fetch route
  const route = await piService.routeWaypoints(
    { venueId, preserveOrder: true },
    {
      start: {
        type: "GeoPoint",
        lat: 47.44427515315559,
        lng: -122.30139915915,
        zone: "e0bbe75001b13ff1b58d99a061a1ed12"
      },
      waypoints: [
        { type: "Place", place: "1933ae99f9b03a79a24576542855a5ab" },
        { type: "Place", place: "0849c46008eb4a9a876c1fe3bb824eb8" },
        { type: "Place", place: "003b904e016e4376bdde5966babc8fcd" }
      ]
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
