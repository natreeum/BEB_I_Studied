// const newsURL = 'http://localhost:4999/data/latestNews';
// const weatherURL = 'http://localhost:4999/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다

  const obj = {}
  let json = await fetch(newsURL).then(response => response.json())
  // let json = await response.json()
  obj.news = json.data

  json = await fetch(weatherURL).then(response => response.json())
  obj.weather = json

  console.log(obj)

  return obj
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}