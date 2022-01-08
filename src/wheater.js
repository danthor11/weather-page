export class Weather{
    constructor(city){
        this.city = city
        this.API_KEY="da8f1d6278183fc277476494f0315537"
    }

    async getWeather(){

        try{
            
            const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}&units=metric`),
                data = await response.json();
            
            if(!response.ok) throw {status:response.status,message:response.statusText}

            console.log("dss")
            return data
        }
        catch(err){
            let messagge = err.statusText || "Ocurrio un error, intente de nuevo"
            console.log(err)
        }
    }

    changeCity(city){
        this.city=city
    }
}