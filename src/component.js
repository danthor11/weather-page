export class Component{
    constructor(){
        this.$tempValue = document.querySelector("#temp-value")
        this.$temp = document.querySelector("#temp")
        this.$location = document.querySelector("#location")
        this.$icon = document.querySelector("#icon")
        this.$wind= document.querySelector("#wind")
        this.$humidity = document.querySelector("#humidity")
        this.$date = document.querySelector("#date")
        this.$feels = document.getElementById("feels");
        this.weatherImg= {
            "Clouds": "./assets/cloudy-day-1.svg",
            "Rain":"./assets/rainy-7.svg",
            "Snow": "./assets/snowy-1.svg",
            "thunderstorm": "./assets/thunder.svg",
            "Drizzle": "./assets/thunder.svg",
            "Clear":"./assets/day.svg",
        }
    }

    render(data){    
        this.$tempValue.textContent = `${Math.floor(data.main.temp)} ºC`
        this.$temp.textContent = `${data.weather[0]["description"].toUpperCase()}`
        this.$location.textContent=`${data.name} - ${data.sys.country}`
        this.$wind.textContent= `Wind: ${data.wind.speed} m/s`
        this.$humidity.textContent= "Humidity: "+data.main.humidity + " %"
        this.$date.textContent = new Date(Date.now()).toTimeString()
        this.$icon.src = this.weatherImg[data.weather[0]["main"]]
        this.$icon.alt= `${data.weather[0]["description"].toUpperCase()}`
    }


}