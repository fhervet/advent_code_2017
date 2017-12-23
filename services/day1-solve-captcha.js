module.exports = {
    solveSimpleCaptcha: solveSimpleCaptcha,
    solveComplexCaptcha: solveComplexCaptcha
}

/**
 * Solve simple captcha where every digit matching the next one is added to the sum. The controls are circular.
 * @param captcha a String containing the captcha to solve
 * @returns the sum of all matching digits.
 */
function solveSimpleCaptcha(captcha) {
    let sum = 0
    for (let i=0; i < captcha.length; i++) {
        // If we reach the end of the array, compare with its first entry
        if(i === captcha.length - 1 && captcha[i] === captcha[0]) {
            sum += parseInt(captcha[i])
        }
        // Otherwise, compare with the next value
        else if(captcha[i] === captcha[i+1]) {
            sum += parseInt(captcha[i])
        }
    }
    return sum
}

/**
 * Solve complex captcha where every digit matching the next one halfway round id added to the sum. The controls are circular.
 * We only need to read the first half of the captcha since if a digit matches an other, that other digit (which is in the second
 * part of the input) will also match with the same digit. Thus, we can multiply by 2 the sum calculated with the first half.
 * @param captcha a String containing the captcha to solve
 * @returns the sum of all matching digits.
 */
function solveComplexCaptcha(captcha) {
    let sum = 0
    let step = captcha.length / 2
    for (let i=0; i < step; i++) {
        if(captcha[i] === captcha[i+step]) {
            sum += parseInt(captcha[i])
        }
    }
    return sum * 2;
}