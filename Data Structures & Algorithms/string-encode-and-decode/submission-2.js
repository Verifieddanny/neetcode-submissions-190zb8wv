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
            str = str ? str + `-#-${strs[i].length}-#-${strs[i]}` : `${strs[i].length}-#-${strs[i]}`
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
        let strs;

        strs = str.split("-#-");

        console.log(strs)

        return strs.filter((str, i) => i % 2 !== 0)


    }
}
