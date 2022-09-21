function getLengthOfLongestElement(arr) {
  // 여기에 코드를 입력하세요
  return arr.reduce((len, el) => {
    const eLen = el.length;
    if (eLen > len) return eLen;
    else return len;
  }, 0);
}
