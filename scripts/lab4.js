/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
// Test comment for pull request test
function sumValues(num1, num2, add) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return false; // Return false if either number is not an integer
    }

    if (add) {
        let result = 0;

        result = num1 + num2;

        return result;
    }
    else {
        return add;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    if (!Array.isArray(prices) || prices.length === 0 || !prices.every(Number.isInteger)) {
        return false; // Return false if the prices array is empty
    }

    const discounted = []
    const length = prices.length;
    let discountedPrice = 0
    for(let i = 0; i < length; i++) {
        discountedPrice += prices[i] * (1 - discount);
        discounted.push(discountedPrice);
        discountedPrice = 0; // Reset discountedPrice for the next iteration
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};