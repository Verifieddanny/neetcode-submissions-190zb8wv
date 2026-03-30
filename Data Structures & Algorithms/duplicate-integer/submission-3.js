class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashset = new Set();

        for(const num of nums) {
            if(hashset.has(num)) { return true}
            hashset.add(num)
        }
         return false
       
    }
}
