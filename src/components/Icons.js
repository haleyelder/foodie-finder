import L from "leaflet";
import locationData from "../locations";

const coffeeIcon = new L.Icon({
  iconUrl: require("../images/coffee-icon.png"),
  iconSize: [30, 30],
});

const restaurantIcon = new L.Icon({
  iconUrl: require("../images/restaurant-icon.png"),
  iconSize: [30, 30],
});

const dessertIcon = new L.Icon({
  iconUrl: require("../images/dessert-icon.png"),
  iconSize: [30, 30],
});

const icon = locationData.filter((location) => 
    location.type == "coffee"
)

export default coffeeIcon;
