class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minBuy = prices[0];


        for (let i = 0; i < prices.length; i++) {
            maxProfit = Math.max(maxProfit, prices[i] - minBuy)
            minBuy = Math.min(minBuy, prices[i])
        }

        return maxProfit
    }
}
