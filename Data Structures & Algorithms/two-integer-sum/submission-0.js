class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = {};

        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];
            if (Object.values(hashMap).includes(difference)) {
                return [i, Number(Object.keys(hashMap).find(key => hashMap[key] === difference))].sort((a, b) => a - b)
            }
            hashMap[i] = nums[i];

        }
    }
}
