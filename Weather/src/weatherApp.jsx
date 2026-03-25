import { useState } from "react"
import SearchBox from "./searchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
    feelsLike: 84.9,
    humidity: 21.62,
    searched_city: "Roorkee, Uttarakhand, India",
    temp: 31.22222222222222,
    time: "13:00:00",
    timeZone: "Asia/Kolkata"
    });  
    
    let updateWeather = (result) => {
        setWeatherInfo(result);
    }
    
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Weather App 🌦️</h1>
            <SearchBox update={updateWeather}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}