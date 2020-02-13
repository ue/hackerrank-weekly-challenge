
function chocolateFeast(wallet, price, wrapperCost) {
  let chocolateCount = parseInt(wallet / price, 10)
  let wrapperCount = chocolateCount

  while (wrapperCount >= wrapperCost) {
      const chocolateCountFromWrapper = parseInt(wrapperCount / wrapperCost, 10)
      wrapperCount = wrapperCount - (chocolateCountFromWrapper * wrapperCost) + chocolateCountFromWrapper
      
      chocolateCount += chocolateCountFromWrapper
  }

  return chocolateCount
}
