class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const hashMap = {}

        for (let i = 0; i < position.length; i++) {
            hashMap[position[i]] = speed[i]
        }


        const sortedPosition = position.sort((a, b) => a - b);


        let stack = [];

        for (let i = sortedPosition.length - 1; i >= 0; i--) {
            let timeToDestination = (target - sortedPosition[i]) / hashMap[sortedPosition[i]];

            stack.push(timeToDestination)

            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }

        }

        return stack.length;
    }
}
