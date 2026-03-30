class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 1) return 1;
        let  numsSet = new Set(nums);
        let longest = 0;


        for(const num of numsSet) {
            if(!numsSet.has(num - 1)){
                let sequenceLength = 0;
                
                while(numsSet.has(num + sequenceLength)) {
                    sequenceLength += 1;
                }

                longest = Math.max(longest, sequenceLength)
            }
        }

     
        return longest;
    }
}
