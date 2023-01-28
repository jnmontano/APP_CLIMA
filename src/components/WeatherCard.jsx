import React from 'react'
import "./styles/WeatherCard.css"
const WeatherCard = ({weather, temps,isCelsius,changeUnitTemp}) => {
  return (
    <section className='weatherCard'>
      <h1 className='weatherCard__title'>Wather APP</h1>
      <h2 className='weatherCard__place'>{weather?.name}, {weather?.sys.country}</h2>
      <div className='weatherCard__img'>
        <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon weather" />
      </div>
      <h3 className='weatherCard__temp'>{isCelsius ? temps?.celsius + " °C" : temps?.fahrenheit+" °F"}</h3>
      <ul className='weatherCard__list'>
        <li>{weather?.weather[0].main}, {weather?.weather[0].description}</li>
        <li><span>WindSpeed:</span> {weather?.wind.speed} m/sec </li>        
        <li><span>Clouds:</span> {weather?.clouds.all} % </li>
        <li><span>Pressure:</span> {weather?.main.pressure} hPa</li>
      </ul>
      <button className='weatherCard__btn' onClick={changeUnitTemp}>°C | °F</button>
    </section>
  )
}

export default WeatherCard