class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false
        }

        let s1HashTable = {}
        let s2HashTable = {}
        for (let i = 0; i < 26; i++) {
            s1HashTable[i] = 0;
            s2HashTable[i] = 0;
        }

        for (let i = 0; i < s1.length; i++) {
            s1HashTable[s1.charCodeAt(i) -'a'.charCodeAt(0)] = s1HashTable[s1.charCodeAt(i) -'a'.charCodeAt(0)] ? s1HashTable[s1.charCodeAt(i) -'a'.charCodeAt(0)] + 1 : 1
            s2HashTable[s2.charCodeAt(i) -'a'.charCodeAt(0)] = s2HashTable[s2.charCodeAt(i) -'a'.charCodeAt(0)] ? s2HashTable[s2.charCodeAt(i) -'a'.charCodeAt(0)] + 1 : 1
        }

        let matches = 0
        for (let i = 0;  i < 26; i++) {
            matches += s1HashTable[i] === s2HashTable[i] ? 1 : 0
        }

        let l = 0
        for (let r = s1.length ; r < s2.length; r++) {
            if (matches === 26) return true

            let index = s2.charCodeAt(r) - 'a'.charCodeAt(0)
            s2HashTable[index] += 1
            if (s1HashTable[index] === s2HashTable[index]) {
                matches +=1
            } else if ((s1HashTable[index] + 1) === s2HashTable[index]){
                matches -= 1
            }

            index = s2.charCodeAt(l) - 'a'.charCodeAt(0)
            s2HashTable[index] -= 1
            if (s1HashTable[index] === s2HashTable[index]) {
                matches +=1
            } else if ((s1HashTable[index] - 1) === s2HashTable[index]){
                matches -= 1
            }

            l += 1
        }


        return matches === 26


    }
}
