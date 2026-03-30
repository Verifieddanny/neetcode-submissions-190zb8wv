class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let mostContained = 0;

        let l = 0;
        let maxL = height[l];

        let r = height.length - 1;
        let maxR = height[r];


        while (l < r) {
            if (l > 0 && Math.min(maxL, maxR) === maxL) {
                mostContained = mostContained + (maxL - height[l] > 0 ? maxL - height[l] : 0);

                maxL = maxL > height[l] ? maxL : height[l];

            }

            if (r < height.length - 1 && Math.min(maxL, maxR) === maxR) {


                mostContained = mostContained + (maxR - height[r] > 0 ? maxR - height[r] : 0);

                maxR = maxR > height[r] ? maxR : height[r];
            }


            if (height[l] < height[r]) {
                l++
            } else {
                r--
            }



        }

        return mostContained
    }
}
