const token = process.env.APD_KEY;

export default {
  getImagePath: (name) => `https://openweathermap.org/img/wn/${name}.png`,
  getGeoCodingPath: (city) => `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${token}`,
	getWeatherDataPath: (lat, lon) => `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${token}`
};