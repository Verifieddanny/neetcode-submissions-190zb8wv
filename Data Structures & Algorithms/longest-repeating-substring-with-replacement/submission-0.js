class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let hashTable = {}
        let res = 0;

        let l = 0;

        let maxFrequency = 0;
        for (let r = 0; r < s.length; r++) {
            hashTable[s[r]]  = hashTable[s[r]] ? hashTable[s[r]] + 1 : 1;

            maxFrequency = Math.max(maxFrequency, hashTable[s[r]])
            
            while(((r-l+1) - maxFrequency) > k){
                hashTable[s[l]] -= 1;
                l += 1;
            }

            res = Math.max(res, r-l+1)
        }

        return res
    }
}
