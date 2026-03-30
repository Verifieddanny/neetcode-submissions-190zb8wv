class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {};


        for (const s of strs) {
            let count = Array(26).fill(0);

            for (const c of s) {
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }

            if (!hashMap[count]) {
                hashMap[count] = [s];
            } else {
                hashMap[count] = [...hashMap[count], s]
            }
        }

        return Object.values(hashMap);
    }
}
