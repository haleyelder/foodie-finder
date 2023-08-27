import L from 'leaflet';

const iconCoffee = new L.Icon({
    iconUrl: require('../images/coffee-icon.png'),
    iconRetinaUrl: require('../images/coffee-icon.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30,30]
});

export default { iconCoffee };