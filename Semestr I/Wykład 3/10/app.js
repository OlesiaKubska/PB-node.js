function printAfterDelay(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

printAfterDelay("Hello after 4 seconds", 4000);
printAfterDelay("Hello after 8 seconds", 8000);