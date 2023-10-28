import axios from "axios";
import kelvinToCelsius from "../helpers/convert";
import { API_KEY } from "../config";

export default class WeatherService {
  static async fetchWeather(city) {
    const params = {
      q: city,
      appid: "b047c42f6a234011f429e7c406d0900a",
    };
    console.log(params);
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params,
      }
    );
    const weather_all_info = {
      temperature: kelvinToCelsius(response.data.main.temp),
      icon: this.#createImgLink(response.data.weather[0].icon),
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather.description,
      time: response.data.dt,
    };

    return weather_all_info;
  }

  static async fetch5WeatherForecast(city) {
    const params = {
      q: city,
      appid: "b047c42f6a234011f429e7c406d0900a",
    };
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params,
      }
    );
    let date_array = this.#createSortedDate(response.data.list);
    console.log(date_array);
    let weather_card = this.#createSortedWeatherList(
      response.data.list,
      date_array
    );
    console.log(response.data.list);
    return { date_array, weather_card };
  }

  static #createSortedDate(unsorted_response) {
    let date_array = [];
    for (const card of unsorted_response) {
      let current_date = card.dt_txt.split(" ")[0];
      if (!date_array.includes(current_date) && date_array.length < 5) {
        date_array.push(current_date);
      } else if (date_array.length === 5) {
        break;
      }
    }
    return date_array;
  }
  static #createImgLink(icon) {
    return `https://openweathermap.org/img/w/${icon}.png`;
  }
  static #createSortedWeatherList(unsorted_response, date_array) {
    let weather_card = [];

    for (const date of date_array) {
      let arr = unsorted_response.filter(
        (item) => item.dt_txt.split(" ")[0] === date
      );

      arr = arr.map((item) => ({
        time: item.dt_txt.split(" ")[1],
        temp: kelvinToCelsius(item.main.temp),
        description: item.weather[0].description,
        icon: this.#createImgLink(item.weather[0].icon),
        humidity: item.main.humidity,
        wind: item.wind.speed,
      }));
      weather_card.push(arr);
    }

    return weather_card;
  }
}
