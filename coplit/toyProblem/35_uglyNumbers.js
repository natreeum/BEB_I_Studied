function uglyNumbers(n) {
  let uglyNumbers = [1]; // array to store ugly numbers

  // variables to store the indices of the last ugly number
  // used in the calculation of the next ugly number
  let i2 = 0,
    i3 = 0,
    i5 = 0;

  // loop through and calculate the next ugly number
  // until we have found the nth ugly number
  while (uglyNumbers.length < n) {
    // calculate the next ugly number using the last ugly numbers
    // multiplied by 2, 3, and 5
    let nextUglyNumber = Math.min(
      uglyNumbers[i2] * 2,
      uglyNumbers[i3] * 3,
      uglyNumbers[i5] * 5
    );

    // add the next ugly number to the array
    uglyNumbers.push(nextUglyNumber);

    // update the indices of the last ugly number used in the calculation
    // of the next ugly number, if necessary
    if (nextUglyNumber === uglyNumbers[i2] * 2) i2++;
    if (nextUglyNumber === uglyNumbers[i3] * 3) i3++;
    if (nextUglyNumber === uglyNumbers[i5] * 5) i5++;
  }

  // return the nth ugly number
  return uglyNumbers[n - 1];
}
