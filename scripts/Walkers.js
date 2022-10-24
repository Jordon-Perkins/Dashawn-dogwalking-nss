import { getWalkers } from "./database.js"

import { getWalkerCities } from "./database.js"

import { getCities } from "./database.js"



document.addEventListener( "click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    // actual factual walker - literal - the exact object
                    let walkerCities = getWalkerCityObjects(walker)
                    let cityNames = getCityNames(walkerCities)
                     window.alert(`${walker.name} services ${cityNames}`)
                }
            }
        }
    }
)


const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
return walkerHTML
}


const getWalkerCityObjects = (walker) => {
    let cities = getWalkerCities();
    let matchingCities = []
    for (const city of cities) {
        if (walker.id === city.walkerId) {
            matchingCities.push(city)
        }
    }
    return matchingCities
}


const getCityNames = (walkerCities) => {
    let matchWalkerCity = []
    for (const walkerCity of walkerCities) {
        for (const city of getCities()) {
            if (walkerCity.cityId === city.id) {
                matchWalkerCity.push(city.name)
            }
        }
        
    }
    
 return matchWalkerCity.join(" and ")
}
