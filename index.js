import { Component } from "./src/component.js"
import { Store } from "./src/Storage.js"
import { Weather } from "./src/wheater.js"

const store = new Store()
const weather = new Weather(store.getCity())
const component = new Component()

document.addEventListener("DOMContentLoaded",getData)


async function getData(){
    const data = await weather.getWeather()
    
    if(!data )
        return false
    
    component.render(data)
    return true
}

const $changeCity = document.getElementById("btn-city")
 
$changeCity.addEventListener("click", async e=> {
    e.preventDefault()
    const city = document.getElementById("city").value

    
    weather.changeCity(city)
    
    if(!(await getData()))
        return
    store.saveLocation(city)
})
