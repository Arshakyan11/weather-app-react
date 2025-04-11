import React from "react";
import styles from "./WeatherBox.module.scss";
import { useSelector } from "react-redux";
import { getGlobalWeather } from "../../store/weatherSlice/weatherSlice";
const WeatherBox = () => {
  const { currentWeather } = useSelector(getGlobalWeather);
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
                      {(elm.main.temp - 273.15).toFixed(2)}%
                    </h2>
                    <h2>
                      <span>Minimum Temp:</span>
                      {(elm.main.temp_min - 273.15).toFixed(2)}%
                    </h2>
                    <h2>
                      <span>Maximum Temp:</span>
                      {(elm.main.temp_max - 273.15).toFixed(2)}%
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
                      {elm.wind.speed}
                    </h2>
                    <h2>
                      <span>Deg:</span>
                      {elm.wind.deg}
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
        </div>
      </div>
    </section>
  );
};

export default WeatherBox;
