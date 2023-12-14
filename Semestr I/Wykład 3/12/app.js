function displayWithIncreasingDelay(delay) {
    setTimeout(() => {
        console.log(`Hello World ${delay}`);
        displayWithIncreasingDelay(delay + 1);
    }, delay * 1000);
}

displayWithIncreasingDelay(1);