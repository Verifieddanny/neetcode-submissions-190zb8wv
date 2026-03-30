class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let l = 1;
        let r = Math.max(...piles);
        let res = r;


        while (l <= r) {
            let currentPos = Math.floor((l + r) / 2);
            let hours = 0

            for (let i = 0; i < piles.length; i++) {
                hours += Math.ceil(piles[i] / currentPos)
            }

            if (hours <= h) {
                res = Math.min(res, currentPos);
                r = currentPos - 1
            } else {
                l = currentPos + 1
            }
        }

        return res
    }
}
