function chocolateFeast(n, c, m) {
  if (n === c && m !== 1) return 1;
  let leftWrappers = 0;
  let howManyCanBuy = Math.floor(n / c);

  const wrappersCanBuy = Math.floor(howManyCanBuy / m);

  leftWrappers = howManyCanBuy % m + wrappersCanBuy;

  if (leftWrappers >= m) {
      do {
          if (!(leftWrappers >= m)) break;
          howManyCanBuy += Math.floor(leftWrappers / m);
          leftWrappers = Math.floor(leftWrappers / m) + (leftWrappers % m);
      }
      while (true);
  }

  return Math.floor(wrappersCanBuy + howManyCanBuy);
}