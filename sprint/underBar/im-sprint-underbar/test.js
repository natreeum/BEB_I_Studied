const each = function (collection, iteratee) {
  // TODO: 여기에 코드를 작성합니다.
  if (toString.call(collection) === "[object Array]") {
    for (let i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
    }
  } else {
    const key = Object.keys(collection);
    for (let i = 0; i < key.length; i++) {
      iteratee(collection[key[i]], key[i], collection);
    }
  }
};

const filter = function (arr, test) {
  // TODO: 여기에 코드를 작성합니다.
  const res = [];
  each(arr, (el) => {
    if (test(el)) res.push(el);
  });
  return res;
};
const reject = function (arr, test) {
  // TODO: 여기에 코드를 작성합니다.
  // TIP: 위에서 구현한 `filter` 함수를 사용해서 `reject` 함수를 구현해 보세요.
  return filter(arr, (el) => {
    return !test(el);
  });
};

const a = [1, 2, 3, 4, 5, 6];
function isE(num) {
  return num % 2 == 0;
}

const uniq = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  const res = [];
  let check = false;
  each(arr, (el) => {
    each(res, (el2) => {
      if (el === el2) check = true;
    });
    if (!check) res.push(el);
    check = false;
  });
  return res;
};

const map = function (arr, iteratee) {
  // TODO: 여기에 코드를 작성합니다.
  // _.map 함수는 매우 자주 사용됩니다.
  // _.each 함수와 비슷하게 동작하지만, 각 요소에 iteratee를 적용한 결과를 리턴합니다.
  const res = [];
  each(arr, (el) => {
    res.push(iteratee(el));
  });
  return res;
};

const pluck = function (arr, keyOrIdx) {
  // _.pluck을 _.each를 사용해 구현하면 아래와 같습니다.
  // let result = [];
  // _.each(arr, function (item) {
  //   result.push(item[keyOrIdx]);
  // });
  // return result;
  // _.pluck은 _.map을 사용해 구현하시기 바랍니다.
  // TODO: 여기에 코드를 작성합니다.
  return map(arr, (el) => {
    return el[keyOrIdx];
  });
};

const reduce = function (arr, iteratee, initVal) {
  // TODO: 여기에 코드를 작성합니다.
  let acc = null;
  const res = [];
  // if (initVal !== undefined) init = initVal;
  // else init = arr[0];
  let idx = 0;
  each(arr, (el) => {
    if (initVal !== undefined) {
      if (idx === 0) acc = initVal;
      acc = iteratee(acc, el, idx, arr);
    } else {
      if (idx === 0) {
        acc = arr[0];
        idx = idx + 1;
        return;
      }
      acc = iteratee(acc, el, idx, arr);
    }
    // if (idx === 0) res[idx] = iteratee(init, el, idx, arr);
    // else res[idx] = iteratee(res[idx - 1], el, idx, arr);
    idx = idx + 1;
  });
  return acc;
};

const orderTraversed = [];
const result = reduce(
  [1, 2, 3, 4],
  function (left, item) {
    orderTraversed.push(item);
    return left - item;
  },
  12
);

console.log(result);
