import React from 'react';

interface WeatherProps {
  weather: {
    city: string;
    temperature: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    description: string;
    icon: string;
    wind_speed: number;
  };
}

const WeatherCard: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <div className="weather-card">
      <h1>{weather.city}</h1>
      <h2>{weather.temperature}°C</h2>
      <h3>{weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}</h3>

      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.description}
      />
        <div className="weather-details">
          <div className="weather-item">
            <div className="label">Ощущается как</div>
            <div className="value">{weather.feels_like}°C</div>
          </div>
          <div className="weather-item">
            <div className="label">Минимальная температура</div>
            <div className="value">{weather.temp_min}°C</div>
          </div>
          <div className="weather-item">
            <div className="label">Максимальная температура</div>
            <div className="value">{weather.temp_max}°C</div>
          </div>
          <div className="weather-item">
            <div className="label">Атмосферное давление</div>
            <div className="value">{weather.pressure} hPa</div>
          </div>
          <div className="weather-item">
            <div className="label">Влажность</div>
            <div className="value">{weather.humidity}%</div>
          </div>
          <div className="weather-item">
            <div className="label">Скорость ветра</div>
            <div className="value">{weather.wind_speed} м/с</div>
          </div>
        </div>
    </div>
  );
};

export default WeatherCard;