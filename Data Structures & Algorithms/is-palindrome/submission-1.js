class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let normalizedString = s.toLowerCase().split(" ").join("").replace(/[^a-zA-Z0-9]/g, '');

            for(let i = 0; i < Math.floor(normalizedString.length/2); i ++) {
                if(normalizedString.charAt(i) !== normalizedString.charAt(normalizedString.length - (i+1))){
                    return false
                }
            }

            return true 
     }
}
 