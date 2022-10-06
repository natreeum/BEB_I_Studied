const newsURL = "http://localhost:4999/data/latestNews";
const weatherURL = "http://localhost:4999/data/weather";

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  const obj = {};
  return fetch(newsURL)
    .then((response) => response.json())
    .then((json) => {
      obj.news = json.data;
      // console.log(obj.news);
      return fetch(weatherURL);
    })
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      obj.weather = json;
      return obj;
    })
    .catch((e) => console.log(e));
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeather,
  };
}
