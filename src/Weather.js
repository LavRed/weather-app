import React, { useState } from "react";
import './Weather.css';
import axios from "axios";

export default function Weather() {
    let [city, setCity] = useState("New York");
    let [weather, setWeather] = useState({});
    let [loaded, setLoaded] = useState(false);

    function weatherData(response) {
        setLoaded(true);
        console.log(response.data);
        setWeather({
            city: response.data.main.name,
            date: "Tuesday 10:00",
            description: response.data.weather[0].description,
            imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            sunrise: response.data.sys.sunrise,
            sunset: response.data.sys.sunset,
        });
    }

    function updateCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        getUrl();
    }

    function getUrl() {
        let apiKey = "593614a5b248941937e4876f3e192174";
        let units = "imperial";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(url).then(weatherData);
      }

    let headerForm = (
    <div className="container">
        <div className="search-engine-box">
            <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    autoComplete="off"
                    onChange={updateCity}
                    />
                </div>
                <div className="col-3">
                    <input
                    type="submit"
                    value="search"
                    className="btn btn-primary w-100"
                    />
                </div>
            </div>
            </form>
        </div>
    </div>
    );

if (loaded) {
  return (
    <div className="Weather">
        {headerForm}
        <div className="city-header">
          <h1>{weather.city}</h1>
        </div>
      <div className="container">
        <div className="weather-app">
          <div>
            <img src={weather.imgUrl} alt="Current Weather Icon" />
            <br />
            <div>{weather.description}</div>
            <strong className="temperature">{Math.round(weather.temperature)}</strong>
            <sup>°F</sup>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ul>
                <li>Last updated: {weather.date}</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind} m/h</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>Sunrise: {weather.sunrise}</li>
                <li>Sunset: {weather.sunset}</li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast">
            <div className="row">
              <div className="col-2">
                <div className="weather-forecast-date">Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  alt=""
                  width="36"
                />
                <div className="weather-forecast-temp">
                  <span className="weather-forecast-temp-max">Max: </span>
                  <span className="weather-forecast-temp-min">Min: </span>
                </div>
              </div>
            </div>
          </div>
          <script src="src/app.js"></script>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/LavRed/vanilla-weather-app.git"
          target="no-opener"
        >
          Open Source Code
        </a>
        by LaVisha Redmon
      </small>
    </div>
  );
} else
    return (
        <div className="Weather">
        {headerForm}
        <div className="city-header">
          <h1>{city}</h1>
        </div>
        <div className="container">
        <div className="weather-app">
          <div>
            <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="Current Weather Icon" />
            <br />
            <div>Cloudy</div>
            <strong className="temperature">19</strong>
            <sup>°F</sup>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ul>
                <li>Last updated: Today</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>Humidity: 14%</li>
                <li>Wind: 10 m/h</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>Sunrise: 07:00</li>
                <li>Sunset: 1800</li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast">
            <div className="row">
              <div className="col-2">
                <div className="weather-forecast-date">Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  alt=""
                  width="36"
                />
                <div className="weather-forecast-temp">
                  <span className="weather-forecast-temp-max">18 </span>
                  <span className="weather-forecast-temp-min"> 12 </span>
                </div>
              </div>
              <div className="col-2">
                <div className="weather-forecast-date">Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  alt=""
                  width="36"
                />
                <div className="weather-forecast-temp">
                  <span className="weather-forecast-temp-max">18 </span>
                  <span className="weather-forecast-temp-min"> 12 </span>
                </div>
              </div>
              <div className="col-2">
                <div className="weather-forecast-date">Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  alt=""
                  width="36"
                />
                <div className="weather-forecast-temp">
                  <span className="weather-forecast-temp-max">18 </span>
                  <span className="weather-forecast-temp-min"> 12 </span>
                </div>
              </div>
              <div className="col-2">
                <div className="weather-forecast-date">Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  alt=""
                  width="36"
                />
                <div className="weather-forecast-temp">
                  <span className="weather-forecast-temp-max">18 </span>
                  <span className="weather-forecast-temp-min"> 12 </span>
                </div>
              </div>
              <div className="col-2">
                <div className="weather-forecast-date">Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  alt=""
                  width="36"
                />
                <div className="weather-forecast-temp">
                  <span className="weather-forecast-temp-max">18 </span>
                  <span className="weather-forecast-temp-min"> 12 </span>
                </div>
              </div>
            </div>
          </div>
          <script src="src/app.js"></script>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/LavRed/vanilla-weather-app.git"
          target="no-opener"
        >
        Open Source Code
        </a>
        by LaVisha Redmon
      </small>
    </div>
    )
}
