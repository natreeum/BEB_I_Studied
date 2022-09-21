function calculateScore(records, value) {
  // TODO: Your code here!
  return records
    .filter((el) => {
      return el.animal === value;
    })
    .reduce((sum, el) => {
      return (sum += el.score);
    }, 0);
}
