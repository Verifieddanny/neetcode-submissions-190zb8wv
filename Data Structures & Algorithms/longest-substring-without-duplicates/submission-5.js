class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hashSet = new Set();
        let l = 0;
        let res = 0;
        
        for(let r = 0; r < s.length; r++) {
            while(hashSet.has(s[r])) {
                hashSet.delete(s[l])
                l += 1
            }

            hashSet.add(s[r])
            res = Math.max(res, r-l + 1)
        }

       return res

    }
}
