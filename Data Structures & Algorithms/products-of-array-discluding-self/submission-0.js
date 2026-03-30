class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prodArr = [];

        for (let i = 0; i < nums.length; i++) {
            prodArr[i] = nums.slice(0, i - 0).reduce((a, b) => a * b, 1) * nums.slice(i + 1).reduce((a, b) => a * b, 1)
        }

        return prodArr;
    }
}
