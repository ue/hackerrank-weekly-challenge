// Complete the encryption function below.
function encryption(str) {
  let strippedStr = '';
  let i = 0;
  
  while (i < str.length) {
    if (str[i] === ' ') {
      i += 1;
      continue
    }

    strippedStr += str[i];
    i += 1;
  }
  
  i = 0;
  const encrypted = new Array(strippedStr.length);
  const sqrt = Math.sqrt(strippedStr.length);

  const columnSize = Math.ceil(sqrt);
  let rowSize = Math.floor(sqrt)

  if (rowSize * columnSize < strippedStr.length) {
      rowSize = columnSize;
  }
  
  // console.log(`Row Size: ${rowSize}`);
  // console.log(`Col Size: ${columnSize}`);

  while (i < strippedStr.length) {
      const rowIndex = parseInt(i / columnSize, 10)
      const columnIndex=  parseInt(i % columnSize, 10)
      
      const newIndexOnEncrypted = (rowSize * columnIndex) + rowIndex; // columnIndex and rowIndex replaced to calculate transpose of matrix
      encrypted[newIndexOnEncrypted] = strippedStr[i];

      // console.log(`Char: ${strippedStr[i]}, Char Index: ${i}`);
      // console.log(`Row Index: ${rowIndex}`);
      // console.log(`Column Index: ${columnIndex}`);
      // console.log(`New Index: ${newIndexOnEncrypted}`);
      // console.log('###############')
      
      i += 1
  }
  // console.log(encrypted);

  i = 0;
  let finalStr = '';
  while (i < encrypted.length) {
    if (i && (i % rowSize === 0)) {
      finalStr += ' ';
    }

    finalStr += encrypted[i] || '';
    i++
  }
  
  return finalStr
}

const result = encryption('feedthedog');