
const geolocation = navigator.geolocation;

geolocation.getCurrentPosition((pos)=>{
    console.log("Accuracy: "+pos.coords.accuracy);
    console.log("latitude: "+pos.coords.latitude);
    console.log("Longitude: "+pos.coords.longitude);
},(e)=>{
    console.log(e)
},{
    enableHighAccuracy: true,
    timeout: 300,
    maximumAge: 0
});
