class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prodArr = [];
        let leftProduct = 1;
        let rightProduct = 1;

        for (let i = 0; i < nums.length; i++) {
            prodArr[i] = leftProduct;
            leftProduct = leftProduct * nums[i];
        }

        for (let i = nums.length -1; i >= 0; i--) {
            prodArr[i] = prodArr[i] * rightProduct;
            rightProduct = rightProduct * nums[i];
        }

        return prodArr;
    }
}
