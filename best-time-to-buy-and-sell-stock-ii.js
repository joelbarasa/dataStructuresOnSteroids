
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    if (!Array.isArray(prices) || prices.length < 2) {
        return 0;
    }
    else {
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] - prices[i - 1] > 0) {
                profit += (prices[i] - prices[i - 1]);
            }
        }
        return profit;
    }
};
