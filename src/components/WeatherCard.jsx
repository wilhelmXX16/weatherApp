import React, { useState } from "react";

const WeatherCard = ({ weather, temperture }) => {
  //si es celsius o no
  const [isCelsius, setIsCelsius] = useState(true);

  const changeTemperature = () => setIsCelsius(!isCelsius);

  return (
    <article className="card">
      <h2 className="card__title">{`${weather?.name}, ${weather?.sys.country}`}</h2>
      <section className="card__first-section">
        {/* <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" /> */}
        <img
          src={
            weather
              ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
              : ""
          }
          alt=""
        />
      </section>
      <section className="card__second-section">
        <h3 className="sencond__title">"{weather?.weather[0].description}"</h3>
        <ul className="second__list">
          <li className="second__item">
            <span className="second_span">Wind Speed</span>{" "}
            {weather?.wind.speed} m/s
          </li>
          <li className="second__item">
            <span className="second_span">Clouds</span> {weather?.clouds.all} %
          </li>
          <li className="second__item">
            <span className="second_span">Pressure</span>{" "}
            {weather?.main.pressure} hPa
          </li>
        </ul>
      </section>
      <h2 className="card__temperature">
        {isCelsius
          ? `${temperture?.celsius} ºC`
          : `${temperture?.farenheit} ºF`}
      </h2>
      <button className="card__btn" onClick={changeTemperature}>
        {isCelsius ? "Change to ºF" : "Change ºC"}
      </button>
    </article>
  );
};

export default WeatherCard;
