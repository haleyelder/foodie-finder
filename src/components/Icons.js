import L from "leaflet";
import locationData from "../locations";

let customIconUrl =""

// const coffeeIcon = new L.Icon({
//   iconUrl: require("../images/coffee-icon.png"),
//   iconSize: [30, 30],
// });

// const restaurantIcon = new L.Icon({
//   iconUrl: require("../images/restaurant-icon.png"),
//   iconSize: [30, 30],
// });

// const dessertIcon = new L.Icon({
//   iconUrl: require("../images/dessert-icon.png"),
//   iconSize: [30, 30],
// });

// const icon = locationData.filter((location) => 
//     location.type == "coffee"
// )

for (let x in locationData) {

    // overriding with each if
    if (locationData[x].type === "coffee") {
        console.log('coffee')
        customIconUrl = require("../images/coffee-icon.png")
        
    } else if (locationData[x].type === "restaurant") {
        console.log('rest')
        customIconUrl = require("../images/restaurant-icon.png")
    } else if (locationData[x].type === "dessert") {
        console.log('dessert')
        customIconUrl = require("../images/dessert-icon.png")
    }
}

const customIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [30, 30]
})

export default customIcon;
