const getlocation = document.getElementById("getlocation");
    getlocation.addEventListener('click', evt=>{

        if ('getlocation' in navigator){
            navigator.getlocation.getCurrentPosition(position=>{
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude
            })
        }
    } )
let googlemapURL = "https://maps.googleapis.com/maps/api/staticcmap?center=${latitude}.${longitude}";
const mapimage = document.getElementById('mapimage');
mapimage.src = googlemapURL
