import React, { useEffect, useState } from 'react'

export default function Home() {

    const [weatherData, setWeatherData] = useState(null);
    const [forecastWeatherData, setforecastWeatherData] = useState(null);
    const [weekforecastWeatherData, setweekforecastWeatherData] = useState(null);
    const [city, setcity] = useState('');

    //display data as par location
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const { latitude, longitude } = position.coords;
                const apiUrl = `https://api.weatherapi.com/v1/current.json?key=a36a81d561f143ddb90100754241803&q=${latitude},${longitude}&aqi=no`;
                const forecastapiUrl = `https://api.weatherapi.com/v1/forecast.json?key=a36a81d561f143ddb90100754241803&q=${latitude},${longitude}&days=1&aqi=no`;
                const weekforecastapiUrl = `https://api.weatherapi.com/v1/forecast.json?key=a36a81d561f143ddb90100754241803&q=${latitude},${longitude}&days=6&aqi=no`;
                const fetchData = async () => {

                    try {
                        const response = await fetch(apiUrl);

                        if (!response.ok) {
                            throw new Error('Error');
                        }

                        const data = await response.json();
                        setWeatherData(data);

                    } catch (error) {
                        console.error(error);
                    }
                };
                fetchData();
                const fetchDayData = async () => {
                    try {
                        const response = await fetch(forecastapiUrl);
                        if (!response.ok) {
                            throw new Error('Error');
                        }
                        const data = await response.json();
                        console.log(data);
                        setforecastWeatherData(data);
                    } catch (error) {
                        console.error(error);
                    }
                };
                fetchDayData();
                const fetchWeekData = async () => {
                    try {
                        const response = await fetch(weekforecastapiUrl);
                        if (!response.ok) {
                            throw new Error('Error');
                        }
                        const data = await response.json();
                        console.log(data);
                        setweekforecastWeatherData(data);
                    } catch (error) {
                        console.error(error);
                    }
                };
                fetchWeekData();
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);

    //display data as par search
    const search = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=a36a81d561f143ddb90100754241803&q=${city}&aqi=no`;
            const forecastapiUrl = `https://api.weatherapi.com/v1/forecast.json?key=a36a81d561f143ddb90100754241803&q=${city}&days=1&aqi=no`;
            const weekforecastapiUrl = `https://api.weatherapi.com/v1/forecast.json?key=a36a81d561f143ddb90100754241803&q=${city}&days=7&aqi=no`;
            const fetchData = async () => {
                try {
                    const response = await fetch(apiUrl);
                    if (!response.ok) {
                        throw new Error('Error');
                    }
                    const data = await response.json();
                    console.log(data);
                    setWeatherData(data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
            const fetchDayData = async () => {
                try {
                    const response = await fetch(forecastapiUrl);
                    if (!response.ok) {
                        throw new Error('Error');
                    }
                    const data = await response.json();
                    console.log(data);
                    setforecastWeatherData(data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchDayData();
            const fetchWeekData = async () => {
                try {
                    const response = await fetch(weekforecastapiUrl);
                    if (!response.ok) {
                        throw new Error('Error');
                    }
                    const data = await response.json();
                    console.log(data);
                    setweekforecastWeatherData(data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchWeekData();
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col city">
                        <div className="row">
                            <form className="form">
                                <label htmlFor="search">
                                    <input className="input" type="text" required="" placeholder="Search City" onChange={(e) => setcity(e.target.value)} onKeyPress={search} id="search" />
                                    <div className="fancy-bg"></div>
                                    <div className="search">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                                            <g>
                                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <button className="close-btn" type="reset">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </label>
                            </form>
                        </div>
                        
                        {weatherData && (
                            <div className="row city1">
                                <div className="col">
                                    <h1>{weatherData.location.name}</h1>
                                    <h5>{weatherData.location.region} | {weatherData.location.country}</h5>
                                    <hr />
                                    <h4>{weatherData.current.condition.text}</h4>
                                    <h4>{weatherData.current.temp_c}℃</h4>
                                    <h4>{weatherData.current.temp_f}℉</h4>
                                </div>
                                <div className="col d-flex align-item-center">
                                    <img src={weatherData.current.condition.icon} alt='img' />
                                </div>
                            </div>
                        )}
                        <div className="row city2">
                            <h4>TODAY FORECAST</h4><hr />
                            {forecastWeatherData && forecastWeatherData.forecast.forecastday[0].hour && (
                                <div className="row" >
                                    {['06', '09', '12'].map((hourString, index) => (
                                        <div className="col t_forecast" key={index}>
                                            <h3>
                                                {`${hourString}:00`}
                                            </h3>
                                            <h4>
                                                {forecastWeatherData.forecast.forecastday[0].hour.find(hour => new Date(hour.time_epoch * 1000).getUTCHours().toString().padStart(2, '0') === hourString)?.temp_c}℃
                                            </h4>
                                            <img className='weather-img' src={forecastWeatherData.forecast.forecastday[0].hour.find(hour => new Date(hour.time_epoch * 1000).getUTCHours().toString().padStart(2, '0') === hourString)?.condition.icon} alt="img" style={{ widows: "40px", height: "40px" }} />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <br /><hr />
                            {forecastWeatherData && forecastWeatherData.forecast.forecastday[0].hour && (
                                <div className="row" >
                                    {['15', '18', '21'].map((hourString, index) => (
                                        <div className="col t_forecast" key={index}>
                                            <h3>
                                                {`${hourString}:00`}
                                            </h3>
                                            <h4>
                                                {forecastWeatherData.forecast.forecastday[0].hour.find(hour => new Date(hour.time_epoch * 1000).getUTCHours().toString().padStart(2, '0') === hourString)?.temp_c}℃
                                            </h4>
                                            <img className='weather-img' src={forecastWeatherData.forecast.forecastday[0].hour.find(hour => new Date(hour.time_epoch * 1000).getUTCHours().toString().padStart(2, '0') === hourString)?.condition.icon} alt="img" style={{ widows: "40px", height: "40px" }} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col days d-flex-cloumnn justify-content-between">
                        <h4>7-DAY FORECAST</h4><hr />
                        {weekforecastWeatherData && weekforecastWeatherData.forecast && (
                            <div className='row'>
                                {weekforecastWeatherData.forecast.forecastday.map(day => (
                                    <div className="weekdata" key={day.date_epoch}>
                                        <span>{day.date}</span>
                                        <span>{day.day.maxtemp_c}°C</span>
                                        <span>{day.day.condition.text}</span>
                                        <span><img src={day.day.condition.icon} alt='img' /></span>
                                    </div>
                                ))}
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
