import axios from "axios";

export default class LocationService {
  static async fetchCurrentWeather() {
    const ip_response = await axios.get("https://api.ipify.org");

    const location_response = await axios.get(
      `https://ipwho.is/${ip_response.data}`
    );
    return location_response.data.city;
  }
}
