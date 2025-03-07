export const getWeatherData = async (city: string) => {
    const apiKey = '56914929b3e1571b21724b73e72ff67a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка: Город "${city}" не найден`);
        }

        const data = await response.json();

        return {
            city: data.name,
            temperature: Math.round(data.main.temp),
            feels_like: Math.round(data.main.feels_like),
            temp_min: Math.round(data.main.temp_min),
            temp_max: Math.round(data.main.temp_max),
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            wind_speed: data.wind.speed,
            wind_deg: data.wind.deg,
        };
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        alert('Не удалось получить данные о погоде. Такого города нет!');
        return null;
    }
};
