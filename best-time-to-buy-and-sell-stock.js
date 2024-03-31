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
        }
        return maximumDeviation;
    }
};
