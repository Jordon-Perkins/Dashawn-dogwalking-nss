import { getCities } from "./database.js"

const cities = getCities()

// this function lists out the cities in HTML
export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const currentCity of cities) {
        citiesHTML += `<li>${currentCity.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

