function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  const strToArr = str.split('');
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let result = '';
  for (let i of strToArr) {
    if (i === ' ') {
      result += ' ';
    } else {
      let decryptIdx = alphabet.indexOf(i) - secret;
      if (decryptIdx < 0) decryptIdx += 26;
      result += alphabet[decryptIdx];
    }
  }
  return result;
}

let output = decryptCaesarCipher('nzop delepd dfaazced jzf', 11);
console.log(output); // --> hello

output = decryptCaesarCipher('zruog', 3);
console.log(output); // --> world
