class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxIndex = heights.indexOf(Math.max(...heights))
        let container = 0;

        for(let i = 0; i < heights.length; i++) {
            if(maxIndex === i) continue;

            let maxContained = (Math.abs(maxIndex - i)) * heights[i];

            container = container > maxContained ? container : maxContained;
        }

        let l = 0;
        let r = heights.length - 1;

        while(l < r) {
            let amount = (r-l) * (heights[l] < heights[r] ? heights[l] : heights[r]);

            console.log(container , amount, [l, r], [heights[l], heights[r]])

            if(amount > container) {
                container = amount;
                r--;
            } else {
                l++;
            } 
        }

        return container
    }
}
