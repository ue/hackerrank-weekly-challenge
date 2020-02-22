function handshake(n) {
  // The first person will handshake (n - 1) person. 
  // And the second person will handshake (n - 2) person since the person already handshaked with the first person. 
  // So the problem is sum of [1..n-1] which can be calculated with (n * (n - 1)) / 2

  return (n * (n-1)) / 2
}
