export default class API {
    constructor() {
        this.API_KEY = "F8MXLZXQYEVGS58KTN4JLY7RX"
        this.BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
    }
    async getData(location, endpoint = "") {
        let response = await fetch(this.BASE_URL+`${location}?key=${this.API_KEY}`)
        return await response.json()
    }
    async getTodaysWeather(location) {
        let data = await this.getData(location)
        let todaysData = data["currentConditions"]
        todaysData["resolvedAddress"] = data["resolvedAddress"]
        todaysData["description"] = data["description"]
        todaysData["hours"] = data["days"][0]["hours"]
        return todaysData
    }
    async getNextDaysWeather(location) {
        let data = await this.getData(location)
        let nextDays = data["days"]
        return nextDays.slice(1, 6)
    }
}


