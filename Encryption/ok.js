function encryption(stringToEncrypt) {
  stringToEncrypt = stringToEncrypt.replace(/\s/g, '');
  const sqrt = Math.sqrt(stringToEncrypt.length);
  const numberOfColumns = Math.ceil(sqrt);
  let numberOfRows = Math.floor(sqrt);

  if (numberOfColumns * numberOfRows < stringToEncrypt.length) {
    numberOfRows = numberOfColumns; 
  }
  const stringArray = [];
  let stringPointer = 0;
  while (stringPointer < stringToEncrypt.length) {
    stringArray.push(stringToEncrypt.substring(stringPointer, stringPointer + numberOfColumns));
    stringPointer = stringPointer + numberOfColumns;
  }
  let encrypted = '';
  for (var i = 0; i < numberOfColumns; i++) {
    for (var j = 0; j < stringArray.length; j++) {
      if (!stringArray[j][i]) {
        continue;
      }
      encrypted = encrypted.concat(stringArray[j][i]);
    }
    encrypted = encrypted.concat(' ');
  }
  return encrypted.trim();
}
