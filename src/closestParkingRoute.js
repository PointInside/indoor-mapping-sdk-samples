import { piService } from "./piService"

export async function closestParkingRoute() {
  const venueId = "0515727397f53978a128ef2ba0823dbe"
  // show map
  const venue = await piService.getVenueById({ venueId })
  const pimap = new PointInside.PiMap({
    element: document.querySelector("#map"),
    service: piService
  })
  await pimap.setVenue({ venue })

  // lookup all parking locations
  const parking = await piService.search({
    classes: ["service"],
    q: "parking",
    venueId,
    limit: 10000
  })

  // format routing waypoints for all parking locations
  const parkingWaypoints = parking.service.results
    .filter((result) => result.title !== "Valet Parking")
    .flatMap((result) =>
      result.locations.map((loc) => ({
        type: "Place",
        place: loc.place,
        key: loc.place
      }))
    )

  // fetch route1
  const route1 = await piService.routeWaypoints(
    { venueId },
    {
      start: { type: "Select", options: parkingWaypoints },
      end: {
        type: "Place",
        place: "44f8541f1af442b39db4de8c38df861d"
      }
    }
  )

  // show route 1
  pimap.setCenter(route1.start)
  pimap.addMarker({ color: "green", location: route1.start })
  pimap.addRoute({ route: route1, color: "green", tag: "1" })

  // fetch route2
  const route2 = await piService.routeWaypoints(
    { venueId },
    {
      start: { type: "Select", options: parkingWaypoints },
      end: { type: "Place", place: "f74864d2ec904c028c44e6badc0b5efa" }
    }
  )

  // show route 2
  pimap.addMarker({ color: "blue", location: route2.start })
  pimap.addRoute({ route: route2, color: "blue", tag: "2" })
}
