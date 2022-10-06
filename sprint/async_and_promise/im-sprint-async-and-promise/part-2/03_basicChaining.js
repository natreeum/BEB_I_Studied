const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = async () => {
  let arr = []

  // let ret1 = await getDataFromFilePromise(user1Path)
  // let ret2 = await getDataFromFilePromise(user2Path)
  // arr.push(JSON.parse(ret1), JSON.parse(ret2))

  return getDataFromFilePromise(user1Path).then((data) => {
    arr.push(JSON.parse(data))
    return getDataFromFilePromise(user2Path)
  }).then((data) => {
      arr.push(JSON.parse(data))
      return arr
    }
  )
  
}

console.log(readAllUsersChaining());

module.exports = {
  readAllUsersChaining
}