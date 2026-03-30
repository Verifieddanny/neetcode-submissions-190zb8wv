class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let container = (heights.length - 1) * (heights[0] < heights[heights.length - 1] ? heights[0] : heights[heights.length - 1])

        let l = 0;
        let r = heights.length - 1;

        while(l < r) {
            let amount = (r-l) * (heights[l] < heights[r] ? heights[l] : heights[r]);

            console.log(container , amount, [l, r], [heights[l], heights[r]])

            if(amount > container) {
                container = amount;
            } 

            if(heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return container
    }
}
