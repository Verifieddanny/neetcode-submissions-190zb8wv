class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        let sHashMap = new Map();
        let tHashMap = new Map();

        for(let i = 0; i < s.length; i++){
            sHashMap.set(s[i], (sHashMap.get(s[i]) || 0) + 1);
            tHashMap.set(t[i], (tHashMap.get(t[i]) || 0) + 1);
        }

        for(const [key, ] of sHashMap){
            if(sHashMap.get(key) !== tHashMap.get(key)) {
                return false;
            }
        }

        return true


    }
}
