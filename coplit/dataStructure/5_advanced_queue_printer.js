function queuePrinter(bufferSize, capacities, documents) {
  // TODO: 여기에 코드를 작성합니다.
  const documentsLength = documents.length;
  const printed = [];
  const buffer = new Array(bufferSize).fill(0);
  let time = 0;
  while (printed.length != documentsLength) {
    time++;

    // buffer
    if (buffer[0] !== 0) printed.push(buffer.shift());
    else buffer.shift();

    let doc = 0;
    if (buffer.reduce((s, e) => s + e, 0) + documents[0] <= capacities)
      doc = documents.shift();

    buffer.push(doc);
  }
  return time;
}

let bufferSize = 1;
let capacities = 10;
let documents = [7, 4, 5, 6, 10];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output); // 8

/*
print    tmp    buffer      document
[]        []     []          [5,1,5,2,3,4,8]
*/
