function handshake(n) {
    if (n===1) return 0;
    if (n===2) return 1;
    if (n>2) {
        let handshakes = 1;
        for (let i = 3; i <= n; i++ ) {
            handshakes += i-1;
        }
        return handshakes
    }
}