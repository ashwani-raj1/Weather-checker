import Button from '@mui/material/Button';
import SearchBox from './searchBox';
import InfoBox from './infoBox';
import WeatherApp from './weatherApp';

function App() {
  let handleClick = () =>{
    console.log("Button was clicked");
  }
  return(
    <div>
      <WeatherApp/>
    </div>
  );
}

export default App
