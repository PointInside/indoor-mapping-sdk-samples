import { piService } from "./piService"

export async function mapPointRoute() {
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
    { venueId },
    {
      start: {
        type: "MapPoint",
        x: 3500,
        y: 2000,
        zone: "b2259713c6f233689174c3b63c8116c4"
      },
      end: { type: "Place", place: "4a45e75f70054b81af0df3bcfbec37e4" }
    }
  )
  // show route
  pimap.displayZone(route.start.zone)
  // add a markers
  pimap.addMarker({ color: "green", location: route.start })
  pimap.addMarker({ color: "red", location: route.end })

  // display route on the map
  pimap.addRoute({ route })
}
