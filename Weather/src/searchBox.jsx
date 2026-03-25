import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';

export default function SearchBox({update}){
    let [city, setCity] = useState("");
    let [country, setCountry] = useState("");

    // const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";
    const WEATHER_URL = import.meta.env.VITE_WEATHER_URL;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${WEATHER_URL}${city},${country}?key=${API_KEY}`
            );

            let data = await response.json();
            console.log(data); // weather data
            let result = {
                temp: ((data.currentConditions.temp-32)*5/9),
                feelsLike: (data.currentConditions.feelslike-32)*5/9,
                humidity: data.currentConditions.humidity,
                time: data.currentConditions.datetime,
                searched_city: data.resolvedAddress,
                timeZone: data.timezone
            }
            console.log(result);
            return result;
        } catch (err) {
            console.log("Error:", err);
        }
    };

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleChangeCountry = (event) =>{
        setCountry(event.target.value);
    }

    let onSubmit = async(event) => {
        event.preventDefault();
        let infor = await getWeatherInfo();
        update(infor);
        setCity("");
        setCountry("");
    }

    return(
        <div className='search'>
         <form onSubmit={onSubmit}>
            <TextField 
                label="Enter City" 
                variant="outlined" 
                value={city} 
                onChange={handleChange} 
                required
            />
            
             <TextField 
                label="Enter Country" 
                variant="outlined" 
                value={country} 
                onChange={handleChangeCountry} 
                required
            />

            <br /><br />

            <Button variant="contained" type='submit'> 
                Search
            </Button>
         </form>
        </div>
    )
}