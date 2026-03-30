class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];

        const res = new Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length; i++) {
            if (temperatures[i] < temperatures[stack[stack.length - 1]]) {
                stack.push(i);
                continue;
            }

            while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let index = stack.pop();
                res[index] = i - index;
            }

            stack.push(i)

        }

        return res
    }
}
