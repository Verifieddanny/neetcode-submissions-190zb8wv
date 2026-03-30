class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) {
            return "0"
        }

        let str;

        for (let i = 0; i < strs.length; i++) {
            str = str ? str + `${strs[i].length}#${strs[i]}` : `${strs[i].length}#${strs[i]}`
        }
        console.log(str);
        return str
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "0") {
            return []
        }
        let strs = [];
        let i = 0;
        while (i < str.length) {

            let hashedIndex = str.indexOf('#', i);
            let wordLength = Number(str.slice(i, hashedIndex));
            strs.push(str.slice(hashedIndex + 1, hashedIndex + 1 + wordLength))
            i = hashedIndex + 1 + wordLength
        }

        return strs

    }
}
