// const newsURL = "http://localhost:4999/data/latestNews";
// const weatherURL = "http://localhost:4999/data/weather";

// function getNewsAndWeatherAll() {
//   // TODO: Promise.all을 이용해 작성합니다

//   return Promise.all([fetch(newsURL), fetch(weatherURL)])
//     .then((response) => {
//       // console.log(response);
//       return response.map((e) => {
//         return e.json();
//       });
//     })
//     .then((promiseArr) => {
//       const obj = {};
//       return promiseArr[0]
//         .then((json) => {
//           obj.news = json.data;
//           return promiseArr[1];
//         })
//         .then((json) => {
//           obj.weather = json;
//           return obj;
//         });
//     });
// }

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다

  return Promise.all([fetch(newsURL), fetch(weatherURL)])
    .then((response) => {
      // console.log(response);
      return response.map((e) => {
        return e.json();
      });
    })
    .then((promiseArr) => {
      return Promise.all([promiseArr[0], promiseArr[1]]).then((json) => {
        const obj = {};

        obj.news = json[0].data;
        obj.weather = json[1];
        return obj;
      });
    });
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAll,
  };
}
