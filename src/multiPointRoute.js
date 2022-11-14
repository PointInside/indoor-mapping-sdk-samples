import { piService } from "./piService"

export async function multiPointRoute() {
  const venueId = "4f876ba5a10533cdadd730413fa44b42"
  // show map
  const venue = await piService.getVenueById({ venueId })
  const pimap = new PointInside.PiMap({
    element: document.querySelector("#map"),
    service: piService
  })
  await pimap.setVenue({ venue })
  // fetch route
  const route = await piService.routeWaypoints(
    { venueId },
    {
      start: { type: "Place", place: "00632aff30644a418357dba2d5317f7b" },
      waypoints: [
        { type: "Place", place: "fcbca6d993d64e518a27411da56b2d92" },
        { type: "Place", place: "f90a567d987c41dc84c39ea31524453e" },
        { type: "Place", place: "faa4d3e0ec2d42e49642f098f7b647e6" },
        { type: "Place", place: "cf1556f6f1f34895b06511de36082655" },
        { type: "Place", place: "dee667c780df460784f2f1d201213a57" }
      ],
      end: { type: "Place", place: "00632aff30644a418357dba2d5317f7b" }
    }
  )
  // show route
  pimap.setCenter(route.start)
  // add a markers
  pimap.addMarker({ color: "green", location: route.start })

  // display route on the map
  pimap.addRoute({ route })
}
