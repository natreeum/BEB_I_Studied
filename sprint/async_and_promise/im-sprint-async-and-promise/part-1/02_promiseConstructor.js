const num = 10;

const sleep = (wait) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("hello");
      console.log(res);
      // rej(new Error("error msg"));
    }, wait);
  });
};
