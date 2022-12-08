const largestRectangularArea = function (histogram) {
  // TODO: 여기에 코드를 작성합니다.

  const getResult = (heightList, left, right) => {
    if (left === right) {
      return heightList[left];
    }

    const mid = Math.floor((left + right) / 2);
    let result = Math.max(
      getResult(heightList, left, mid),
      getResult(heightList, mid + 1, right)
    );
    let low = mid,
      high = mid + 1;
    let height = Math.min(heightList[low], heightList[high]);
    result = Math.max(result, height * 2);

    while (low > left || high < right) {
      if (
        high < right &&
        (low === left || heightList[low - 1] < heightList[high + 1])
      ) {
        high++;
        height = Math.min(height, heightList[high]);
      } else {
        low--;
        height = Math.min(height, heightList[low]);
      }
      result = Math.max(result, height * (high - low + 1));
    }
    return result;
  };

  return getResult(histogram, 0, histogram.length - 1);
};
