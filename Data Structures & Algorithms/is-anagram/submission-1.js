class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArr = s.split("");
        let tArr = t.split("");

        for (let i = 0; i < sArr.length; i++) {
            for (let j = 0; j < tArr.length; j++) {
                if (sArr[i] === tArr[j]) {
                    tArr.splice(j, 1);
                    sArr.splice(i, 1);
                    i--;
                    break;
                }
            }
        }

        if (tArr.length === 0 && tArr.length === sArr.length) {
            return true
        }

        return false

    }
}
