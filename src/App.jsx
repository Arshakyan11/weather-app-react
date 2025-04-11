import React from 'react'
import styles from "./App.module.scss"
import InputBox from './components/InputBox/InputBox'
import WeatherBox from './components/WeatherBox/WeatherBox'
const App = () => {
  return (
    <div>
       <InputBox/>
       <WeatherBox/>
    </div>
  )
}

export default App
