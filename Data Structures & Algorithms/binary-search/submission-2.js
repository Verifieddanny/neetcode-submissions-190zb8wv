class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        if(nums.length === 1 && nums[0] === target) {
            return 0;
        }

        let minRange = 0;
        let maxRange = nums.length -1;

        let i = Math.floor((minRange + maxRange) / 2);

        


        while (minRange < maxRange) {
            console.log(i, nums[i], target);
            if (nums[i] > target) {
                console.log("greater than target", i, nums[i], target);
                maxRange = i - 1
                i = Math.floor((minRange + maxRange) / 2);
                console.log(nums, i)
            }

            if (nums[i] < target) {
                console.log("less than target", i, nums[i], target);

                minRange = i + 1
                i = Math.floor((minRange + maxRange) / 2);
                console.log(nums, i)

            }

            if (nums[i] === target) {
                console.log("equal target", i, nums[i], target);

                return i
            }
        }

        return -1
    }
}
