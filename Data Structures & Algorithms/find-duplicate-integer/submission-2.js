class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findDuplicate(nums) {
    let set = new Set();
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
      console.log(set, nums[l], nums[r])
      if (nums[l] !== nums[r]) {
        if (!set.has(nums[l]) && !set.has(nums[r])) {
          set.add(nums[l]);
          set.add(nums[r]);
          l++;
          r--;
        } else if (set.has(nums[l])) {
          return nums[l]
        } else if (set.has(nums[r])) {
          return nums[r]
        }
      } else if (l === r && set.has(nums[l])) {
        return nums[l]
      } else {
        return nums[l]
      }
    }
    return 0
  }
}
