const {getDataFromFile} = require("./01_callBack.js")

const {readFile} = require("fs");

const getDataFromFilePromise = (filePath) => {
  return new Promise((res, rej) => {
    readFile(filePath, "utf8", (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
};

// getDataFromFilePromise("README.md")
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = {
  getDataFromFilePromise,
};
