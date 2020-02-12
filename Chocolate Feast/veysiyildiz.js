function chocolateFeast(n, c, m) {
    let totalBars = (n - (n % c)) / c;
    let wrappers = totalBars;

    do {
        let wrappersRemaining = wrappers % m;
        totalBars = totalBars + ((wrappers - wrappersRemaining ) / m);
        wrappers = wrappersRemaining + ((wrappers - wrappersRemaining ) / m);
    } 
    while (wrappers >= m);

    return totalBars;
}