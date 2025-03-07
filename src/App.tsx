import React, { useState} from 'react';
import { getWeatherData } from './weatherApi'; 
import Input from './components/Input';
import Button from './components/Button';
import WeatherCard from './components/WeatherCard';
import './App.scss'; 

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');  
  const [weather, setWeather] = useState<any>(null);  
  const [loading, setLoading] = useState<boolean>(false);
  const [prevCity, setPrevCity] = useState<string>('');  

  const fetchWeather = async () => {
    if (city !== prevCity) {
      setLoading(true);  
      const data = await getWeatherData(city);  
      setWeather(data);
      setPrevCity(city);  
      setLoading(false); 
    }
  };

  return (
    <div className="app">
      <h1 className='title'>Прогноз погоды</h1>
      <div className="input-container">
        <Input value={city} onChange={setCity} />  
      </div>
      <div className="button-container">
        <Button onClick={fetchWeather} label="Получить прогноз" />  
      </div>

      {loading && <div className="loader"></div>}  
      
      {weather && !loading && <WeatherCard weather={weather} />}  
    </div>
  );
};

export default App;
