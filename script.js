var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);


// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
const searchInput=document.getElementById('search')
searchInput.addEventListener("input", () => {
    searchInput.value.toLowerCase()

})
function fetchApi(){
    const read=document.getElementById('submit')
    read.addEventListener('click', ()=>{
        fetch("https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_AwZ6ritDhEkIbE5W8TELjnX7KF0hQ&ipAddress=192.212.174.101")
        .then((response) => response.json())
    })
   
}
