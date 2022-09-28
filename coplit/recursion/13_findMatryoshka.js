function findMatryoshka(matryoshka, size) {
  // TODO: 여기에 코드를 작성합니다.
  if (matryoshka.size === size) return true;
  else if (matryoshka.matryoshka) {
    return findMatryoshka(matryoshka.matryoshka, size);
  } else return false;
}

const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};

console.log(findMatryoshka(matryoshka, 8));
