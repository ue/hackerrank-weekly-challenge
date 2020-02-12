function numberOfChocolates(money, costOfChocolate, wrapperToCollect) {
  if (money < costOfChocolate) {
    return 0;
  }
  let eaten = parseInt(money / costOfChocolate);
  let wrappers = eaten;
  if (wrappers / wrapperToCollect < 1) {
    return eaten;
  }
  while (wrappers / wrapperToCollect >= 1) {
    eaten = eaten + parseInt(wrappers / wrapperToCollect);
    wrappers = (wrappers % wrapperToCollect) + parseInt(wrappers / wrapperToCollect);
  }
  return eaten;
}