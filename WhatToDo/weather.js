
const API_KEY='52dc45a8ded1676f8108b7ba92691e9f'

function onGeoOk(){
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url)
}


function onGeoError(){
    alert('위치를 찾을 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)