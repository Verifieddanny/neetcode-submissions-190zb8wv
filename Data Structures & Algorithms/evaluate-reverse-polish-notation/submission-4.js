class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        if (tokens.length < 2) {
            return +tokens[0]
        }
        let operation = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => (a / b) < 0 ? Math.ceil(a / b) : Math.floor(a / b)
        }

        let tokenStack = [];


        for (let i = 0; i < tokens.length; i++) {
            if (!operation[tokens[i]]) {
                tokenStack.push(tokens[i])
            }

            if (operation[tokens[i]]) {
                let b = tokenStack.pop();
                let a = tokenStack.pop();


                tokenStack.push(operation[tokens[i]](+a, +b))

            }
        }

        return tokenStack.pop()
    }
}
