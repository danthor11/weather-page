export class Store {
    constructor(){
        this.city
        this.defaultCity="Caracas"
    }

    saveLocation(city){
        localStorage.setItem("city",city)
    }


    getCity(){
        if(localStorage.getItem("city")===null)
            this.city=this.defaultCity
        else
            this.city=localStorage.getItem("city")
        return this.city
    }
}