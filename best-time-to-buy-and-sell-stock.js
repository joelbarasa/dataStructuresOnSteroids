/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!Array.isArray(prices) || prices.length < 2) {
        return 0;
    }
    else {
        let minimumIndex = 0;
        let maximumDeviation = 0;
        for (let currentIndex = 1; currentIndex < prices.length; currentIndex++) {
            if (prices[currentIndex] < prices[minimumIndex]) {
                minimumIndex = currentIndex;
            }

            maximumDeviation = Math.max(maximumDeviation, prices[currentIndex] - prices[minimumIndex]);
        }
        return maximumDeviation;
    }
    // return 0;
};






/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    console.log(prices);
    if (!Array.isArray(prices) || (!Array.isArray(prices) && prices.length < 2)) {
        return 0;
    }
    else {
        let maximumDeviation = 0, minimumIndex = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < prices[minimumIndex]) {
                minimumIndex = i;
            }
            if (prices[i] - prices[minimumIndex] > maximumDeviation) {
                maximumDeviation = prices[i] - prices[minimumIndex];
            }
                 // maximumDeviation = Math.max(maximumDeviation, (prices[currentIndex] - prices[minimumIndex]));
        }
        return maximumDeviation;
    }
};



