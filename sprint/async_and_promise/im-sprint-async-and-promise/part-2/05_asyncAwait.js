const path = require("path");
const { getDataFromFilePromise } = require("./02_promiseConstructor");

const user1Path = path.join(__dirname, "files/user1.json");
const user2Path = path.join(__dirname, "files/user2.json");

const readAllUsersAsyncAwait = async () => {
  // TODO: async/await 키워드를 이용해 작성합니다
  const arr = [];
  let ret1 = await getDataFromFilePromise(user1Path);
  let ret2 = await getDataFromFilePromise(user2Path);
  arr.push(JSON.parse(ret1), JSON.parse(ret2));
  return arr;
};

readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait,
};
