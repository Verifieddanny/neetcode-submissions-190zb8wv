class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];

        const res = new Array(temperatures.length)

        for(let i = 0; i < temperatures.length; i++) {
            if(temperatures[i] < temperatures[stack[stack.length - 1]]) {
                stack.push(i);
                continue;
            }

            while(temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let index = stack.pop();
                res[index] = i - index;
            }

            stack.push(i)

        }

        for(let i = 0; i < stack.length ; i ++) {
            res[stack[i]] = 0;
        }

        return res
    }
}
