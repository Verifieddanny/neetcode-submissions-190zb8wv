class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < sortedNums.length; i++) {
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

            let j = i + 1;
            let k = sortedNums.length - 1;

            while (j < k) {
                const threeSum = sortedNums[i] + sortedNums[j] + sortedNums[k];

                if (threeSum < 0) {
                    j++;


                }
                else if (threeSum > 0) {

                    k--;
                }
                else {
                    res.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                    j++
                    while (sortedNums[j] === sortedNums[j - 1] && j < k) {
                        j++;
                    }
                }



            }

        }

        return res;
    }
}
