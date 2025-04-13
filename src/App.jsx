import React from "react";
import styles from "./App.module.scss";
import InputBox from "./components/InputBox/InputBox";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import Toastify from "./components/Toastify/Toastify";
const App = () => {
  return (
    <div className={styles.allSection}>
      <Toastify />
      <InputBox />
      <WeatherBox />
    </div>
  );
};

export default App;
