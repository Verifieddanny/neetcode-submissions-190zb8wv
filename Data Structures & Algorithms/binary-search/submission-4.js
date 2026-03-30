class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let minRange = 0;
        let maxRange = nums.length - 1;
        let i = Math.floor((minRange + maxRange) / 2);

        while (minRange <= maxRange) {
            console.log(i, nums[i], target);
            if (nums[i] > target) {
                maxRange = i - 1
                i = Math.floor((minRange + maxRange) / 2);
            }

            if (nums[i] < target) {
                minRange = i + 1
                i = Math.floor((minRange + maxRange) / 2);

            }

            if (nums[i] === target) {
                return i
            }
        }

        return -1
    }
}
