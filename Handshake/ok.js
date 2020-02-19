function handshake(numberOfPeople) {
    let handshakeCount = 0;
    for (let i = 1; i < numberOfPeople; i++) {
        const personLeft = numberOfPeople - i;
        handshakeCount += personLeft;
    }
    return handshakeCount;
}