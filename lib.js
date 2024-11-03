function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    if (num < 2) return false;
    for (let divisor = 2; divisor * divisor <= num; divisor++) {
        if (num % divisor === 0) return false;
    }
    return true;
}
function factorial(num) {
    if (num < 0) return -1; 
    if (num > 15) return -1;
    if (num === 0 || num === 1) return 1;

    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
module.exports = {
    avg,
    prime,
    factorial
}