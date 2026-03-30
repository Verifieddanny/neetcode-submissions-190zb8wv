class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) {
            return false
        }

        let openBraces = new Set(['(', '[', '{'])
        let closingBraces = new Set([')', ']', '}'])
        let stack = []

        let matches = 0
         if (!openBraces.has(s[0]) || !closingBraces.has(s[s.length-1])) {
                return false
            }

        for (let i = 0; i < s.length; i++) {
           
            if (openBraces.has(s[i])) {
                stack.push(s[i])
                console.log(stack)
            }

            if (closingBraces.has(s[i])) {
                console.log("s[i]", s[i], "stack[-1]", stack[stack.length - 1])
                if ((s[i].charCodeAt(0) - stack[stack.length - 1].charCodeAt(0) > 0) && (s[i].charCodeAt(0) - stack[stack.length - 1].charCodeAt(0) <= 2)) {
                    matches += 1;
                    stack.pop();
                    console.log(matches, stack)
                } else {
                    return false
                }
            }
        }

        return matches === (s.length / 2)
    }
}
