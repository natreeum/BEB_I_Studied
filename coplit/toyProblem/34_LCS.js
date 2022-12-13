function LCS(string1, string2) {
  // Create a matrix to store the lengths of the longest common subsequences
  // for all substrings of string1 and string2
  const matrix = [];

  // Initialize the matrix with zeros
  for (let i = 0; i <= string1.length; i++) {
    matrix[i] = [];
    for (let j = 0; j <= string2.length; j++) {
      matrix[i][j] = 0;
    }
  }

  // Calculate the lengths of the longest common subsequences
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        // If the characters are the same, add one to the length of the LCS
        // of the two substrings without this character
        matrix[i + 1][j + 1] = matrix[i][j] + 1;
      } else {
        // If the characters are different, take the maximum of the LCS
        // of the two substrings without this character
        matrix[i + 1][j + 1] = Math.max(matrix[i][j + 1], matrix[i + 1][j]);
      }
    }
  }

  // Return the length of the LCS of the entire strings
  return matrix[string1.length][string2.length];
}
