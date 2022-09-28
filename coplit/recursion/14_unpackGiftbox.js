function unpackGiftbox(giftBox, wish) {
  if (giftBox.length === 0) return false;
  for (let i of giftBox) {
    if (i === wish) return true;
    else if (Array.isArray(i) && i.length != 0) {
      if (unpackGiftbox(i, wish)) return true;
    }
  }

  return false;
}

const gift = ["pen", [[], "iphone"], ["ps5", ["book", [], "airpods"]]];
console.log(unpackGiftbox(gift, "airpods"));
