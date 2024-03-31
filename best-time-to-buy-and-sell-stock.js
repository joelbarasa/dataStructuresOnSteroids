/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!Array.isArray(prices)) {
        return -1;
    }
    if (prices.length === 0) {
        return 0;
    }
    else {
        let profit = 0;
        for (let i = 1; i < prices.length; i++) {
            let maxValue = Math.max(...prices.slice(i));
            if (maxValue - prices[i] > profit) {
                profit = maxValue - prices[i];
            }

        }
        return profit;
    }

};
