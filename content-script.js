/*
Add a beacon to DOM to notify frontend that the Firefox addons has been installed
*/
let beacon = document.createElement("div");
beacon.className = "phind-firefox-addons-beacon"
document.body.appendChild(beacon);
