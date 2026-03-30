class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;


        for (let i = 0; i < prices.length; i++) {
            let minBuy = Math.min(...prices.slice(0, (i > 0) ? i : 0))

            if ((prices[i] - minBuy) > maxProfit) {

                maxProfit = prices[i] - minBuy;
            }
        }

        return maxProfit
    }
}
