import React from "react";
import styles from "./WeatherBox.module.scss";
import { useSelector } from "react-redux";
import { getGlobalWeather } from "../../store/weatherSlice/weatherSlice";
import rainDrop from "../../assets/img/drop.png";
import temp from "../../assets/img/thermometer.png";
import wind from "../../assets/img/wind.png";
import time from "../../assets/img/clock.png";
import calendar from "../../assets/img/calendar.png";

import { nanoid } from "nanoid";
const WeatherBox = () => {
  const { currentWeather, weeklyWeather, dailyWeather } =
    useSelector(getGlobalWeather);
  const SetSun = ({ time }) => {
    const date = new Date(time * 1000);
    const stringData = date.toLocaleString();
    return stringData;
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.weatherSection}>
          {currentWeather?.map((elm) => {
            return (
              <div key={elm.id} className={styles.mainWeather}>
                <div className={styles.title}>
                  <img
                    src={`http://openweathermap.org/img/w/${elm.weather[0].icon}.png`}
                    alt=""
                  />
                  <h1>{elm.name}</h1>
                </div>
                <ul className={styles.firstUl}>
                  <li>
                    <h2>
                      <span>Temp:</span>
                      {(elm.main.temp - 273.15).toFixed(2)}°C
                    </h2>
                    <h2>
                      <span>Min Temp:</span>
                      {(elm.main.temp_min - 273.15).toFixed(2)}°C
                    </h2>
                    <h2>
                      <span>Max Temp:</span>
                      {(elm.main.temp_max - 273.15).toFixed(2)}°C
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <span>Humidity:</span>
                      {elm.main.humidity}%
                    </h2>
                    <h2>
                      <span>State:</span>
                      {elm.weather[0].description}
                    </h2>
                    <h2>
                      <span>Wind:</span>
                      {elm.wind.speed}h/km
                    </h2>
                    <h2>
                      <span>Deg:</span>
                      {elm.wind.deg}°
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <span>Sunrise</span>
                      <SetSun time={elm.sys.sunrise} />
                    </h2>
                    <h2>
                      <span>Sunset</span>
                      <SetSun time={elm.sys.sunset} />
                    </h2>
                  </li>
                </ul>
              </div>
            );
          })}

          <div className={styles.middleSection}>
            <h3>Hourly Forecast</h3>
            <div className={styles.middleMainBox}>
              {dailyWeather?.map((elm) => {
                return (
                  <div key={nanoid(3)} className={styles.middleWeatherEach}>
                    <img
                      className={styles.mainImg}
                      src={`http://openweathermap.org/img/w/${elm.weather[0].icon}.png`}
                      alt=""
                    />
                    <ul>
                      <li>
                        {elm.dt_txt.split(" ")[1]}
                        <img src={time} alt="img" />
                      </li>
                      <li>
                        {(elm.main.temp - 273.15).toFixed(2)}°C
                        <img src={temp} alt="img" />
                      </li>
                      <li>
                        {elm.main.humidity}%
                        <img src={rainDrop} alt="img" />
                      </li>
                      <li>
                        {elm.wind.speed}
                        <img src={wind} alt="img" />
                      </li>
                      <li>{elm.weather[0].description}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.middleSection}>
            <h3>Weekly Forecast</h3>
            <div className={styles.middleMainBox}>
              {weeklyWeather?.map((elm) => {
                return (
                  <div key={nanoid(3)} className={styles.middleWeatherEach}>
                    <img
                      className={styles.mainImg}
                      src={`http://openweathermap.org/img/w/${elm.weather[0].icon}.png`}
                      alt=""
                    />
                    <ul>
                      <li>
                        {elm.dt_txt.split(" ")[0]}
                        <img src={calendar} alt="img" />
                      </li>
                      <li>
                        {(elm.main.temp - 273.15).toFixed(2)}°C
                        <img src={temp} alt="img" />
                      </li>
                      <li>
                        {elm.main.humidity}%
                        <img src={rainDrop} alt="img" />
                      </li>
                      <li>
                        {elm.wind.speed}
                        <img src={wind} alt="img" />
                      </li>
                      <li>{elm.weather[0].description}</li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherBox;
