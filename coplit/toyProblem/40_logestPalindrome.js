let longestPalindrome = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  function isPalindrome(start, end) {
    while (start < end) {
      if (str[start++] !== str[end--]) return false;
    }
    return true;
  }

  let longestLength = 0;

  for (let i = 0; i < str.length; i++) {
    let oddLength = 0;
    let evenLength = 0;
    let start = i;
    let end = i;
    // odd
    while (isPalindrome(start, end) && start <= end) {
      if (end === str.length) break;
      oddLength = end - start + 1;
      if (start - 1 >= 0) start = start - 1;
      end++;
    }
    start = i;
    end = i + 1;
    // even
    while (isPalindrome(start, end) && start <= end) {
      if (end === str.length) break;
      evenLength = end - start + 1;
      if (start - 1 >= 0) start = start - 1;
      end++;
    }
    if (Math.max(oddLength, evenLength) > longestLength)
      longestLength = Math.max(oddLength, evenLength);
  }
  return longestLength;
};

console.log(longestPalindrome('a a'));
