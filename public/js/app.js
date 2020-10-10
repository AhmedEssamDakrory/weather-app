
const geocode = (location, outcome) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json?access_token=pk.eyJ1IjoiYWhtZWRlc3NhbSIsImEiOiJja2cwMHRlbWcwcHVqMnZtN3kxZmNoaDlnIn0.SWqOBw5gUWPCImjhy6eALQ"
    fetch(url).then((res) => {
        res.json().then((data) => {
            if(data.error){
                outcome("pls input a valid location", "")
            } else {
                weather({
                    latitude : data.features[0].center[0],
                    longitude : data.features[0].center[1]
                }, outcome)
            }
        })
    })
}

const weather = ({ latitude, longitude }, outcome) => {
    const url = "http://api.weatherstack.com/current?access_key=9556bdce9467c7052b36bf632cdbdd29&query="+latitude+","+longitude 
    fetch(url).then((res) => {
        res.json().then( (data) => {
            if(data.error){
                outcome("Something wrong!", "")
            } else{
                outcome("Success", data.current.temperature)
            }
        })
    })
}

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    geocode(location, (error, data) => {
        message1.textContent = error
        message2.textContent = data
    })
})