

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-btn');
    const cityInput = document.querySelector('.city-input');
    const city = document.querySelector('.City');
    const Temprature = document.querySelector('.Temprature');
    const MaxTemp = document.querySelector('.max-temp');
    const MinTemp = document.querySelector('.min-temp');
    const WhetherType = document.querySelector('.Whether');
    let cityInputVal = ''
    const apiKey = '041ff1903215f9febee8f4fd475b3837'

    const fetchCity = async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json()
        console.log(data?.main?.temp)
        const temp = data?.main?.temp
        const tempMin = data?.main?.temp_min
        const tempMax = data?.main?.temp_max
        const cityname = data.name
        const Whether = data?.weather[0].description
        return { temp, tempMax, tempMin, cityname, Whether }
    }

    cityInput.addEventListener('change', (e) => {
        cityInputVal = e.target.value
    })
    searchBtn.addEventListener('click', async () => {
        if (!cityInputVal.trim()) return
        const { temp, tempMax, tempMin, cityname, Whether } = await fetchCity(cityInputVal)
        console.log(temp)
        city.textContent = `City: ${cityname}`
        Temprature.textContent = `Temp: ${temp}`
        MaxTemp.textContent = `Temp-Max: ${tempMax}`
        MinTemp.textContent = `Temp-Min: ${tempMax}`
        WhetherType.textContent = `Whether: ${Whether}`

    })
})