import "./styles.css"
import { mapClick } from "./mapClick"
import { addMarker } from "./addMarker"
import { pointToPointRoute } from "./pointToPointRoute"
import { mapPointRoute } from "./mapPointRoute"
import { multiPointRoute } from "./multiPointRoute"
import { closestParkingRoute } from "./closestParkingRoute"
import { markerGrouping } from "./markerGrouping"
import { accessibleRoute } from "./accessibleRoute"
import { geoPointRoute } from "./geoPointRoute"
import { fixedOrderRoute } from "./fixedOrderRoute"

window.menuHandler = {
  mapClick,
  addMarker,
  pointToPointRoute,
  mapPointRoute,
  multiPointRoute,
  closestParkingRoute,
  markerGrouping,
  accessibleRoute,
  geoPointRoute,
  fixedOrderRoute
}

document.getElementById("menu").innerHTML = `
<h1>Point Inside Map Samples</h1>
<div class="menu-items">
<a onClick="menuHandler.addMarker()">Add a Marker</a>
<a onClick="menuHandler.mapClick()">Handle Map Click</a>
<a onClick="menuHandler.markerGrouping()">Marker Groupig</a>
<a onClick="menuHandler.pointToPointRoute()">Point-to-point Route</a>
<a onClick="menuHandler.accessibleRoute()">Accessible Route</a>
<a onClick="menuHandler.mapPointRoute()">MapPoint Route</a>
<a onClick="menuHandler.geoPointRoute()">GeoPoint Route</a>
<a onClick="menuHandler.multiPointRoute()">Multipoint Route</a>
<a onClick="menuHandler.fixedOrderRoute()">Fixed Order Route</a>
<a onClick="menuHandler.closestParkingRoute()">Find Closest Parking</a>
</div>
`
if (false) {
  mapClick()
}
