import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import "./App.scss";
import WeatherHeader from "./components/header/WeatherHeader";
import InformationCard from "./components/informationCard/InformationCard";
import WeatherCard from "./components/weatherCard/WeatherCard";
import LocationService from "./api/locationService";
import WeatherService from "./api/weatherService";
import ErrorMessage from "./components/error/ErrorMessage";
import { Loader } from "./components/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import WeatherTabs from "./components/weatherTabs/WeatherTabs";
import { ThemeContext } from "./providers/ThemeProvider";
import { getTheme } from "./localStorage/localStorage";

import cn from "classnames";
function App() {
  const [weatherAllInfo, setWeatherAllInfo] = useState({});
  const [currentCity, setCurrentCity] = useState("");
  const [dateForecast, setDateForecast] = useState([]);
  const [cardForecast, setCardForecast] = useState([]);

  const [isDark, setIsDark] = useState("");

  const [fetchLocation, loading, error] = useFetching(async () => {
    if (currentCity === "") {
      const city = await LocationService.fetchCurrentWeather();
      setCurrentCity(city);
    }
    if (currentCity !== "") {
      const weather_all_info = await WeatherService.fetchWeather(currentCity);
      setWeatherAllInfo(weather_all_info);
      const { date_array, weather_card } =
        await WeatherService.fetch5WeatherForecast(currentCity);
      setDateForecast(date_array);
      setCardForecast(weather_card);
      console.log(weather_card);
    }
  });

  useEffect(() => {
    fetchLocation();
    console.log(isDark);
  }, [currentCity]);

  useLayoutEffect(() => {
    console.log(isDark);
    let x = JSON.parse(getTheme());
    setIsDark(x);
    console.log(x);
    console.log(isDark);
  }, []);

  const changeCityToFind = (value) => {
    setCurrentCity(value);
  };

  return (
    //light_theme
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={cn("App", { light_theme: isDark == false })}>
        {loading ? (
          <Loader />
        ) : (
          <div className="wrapper_content">
            <WeatherHeader changeCityToFind={changeCityToFind} />
            <section
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <InformationCard
                temperature={weatherAllInfo.temperature}
                weather_icons={weatherAllInfo.weather_icons}
                city={weatherAllInfo.city}
                icon={weatherAllInfo.icon}
              />
              <WeatherCard
                temperature={weatherAllInfo.temperature}
                pressure={weatherAllInfo.pressure}
                humidity={weatherAllInfo.humidity}
                wind={weatherAllInfo.wind}
              />
            </section>
            <WeatherTabs
              dateForecast={dateForecast}
              cardForecast={cardForecast}
            />
          </div>
        )}

        {error !== "" ? (
          <ErrorMessage error={error} retryFunc={changeCityToFind} />
        ) : null}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
