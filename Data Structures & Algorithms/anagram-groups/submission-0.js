class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap = {};
        let groupAnagram = [];

        for(let i = 0; i < strs.length; i++) {
            let sortedStr = strs[i].split("").sort().join("");
            if (sortedStr in hashMap) {
                hashMap[sortedStr] = [...hashMap[sortedStr], strs[i]]
            } else {
                hashMap[sortedStr] = [strs[i]]
            }
        }

        for (const [key, ] of Object.entries(hashMap)){
            groupAnagram.push(hashMap[key]);
        }
        return  groupAnagram;
    }
}
