let count = 0;
const intervalId = setInterval(() => {
    console.log('Hello');
    count++;
    if (count === 5) {
        clearInterval(intervalId);
        console.log('Finish');
    }
}, 1000);