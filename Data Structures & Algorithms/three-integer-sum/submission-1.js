class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        let threeSum = [];

        console.log("sortedNums", sortedNums)

        for (let i = 0; i < sortedNums.length; i++) {
            let j = 0;
            let k = sortedNums.length - 1;

            while (j < sortedNums.length && k > 0) {
                if (i === j) j++;
                if (i === k) k--;

                console.log("j", j, "k", k)

                if (sortedNums[i] + sortedNums[j] + sortedNums[k] < 0) {
                    j++;
                    console.log("j", j, "k", k)

                } else if (sortedNums[i] + sortedNums[j] + sortedNums[k] > 0) {
                    k--;
                    console.log("j", j, "k", k)

                } else {
                    if(!(j < sortedNums.length) || !(k > 0)) continue
                    let triplet = [sortedNums[i], sortedNums[j], sortedNums[k]].sort((a, b) => a - b)

                    console.log("triplet", triplet, [i, j, k], [sortedNums[i], sortedNums[j], sortedNums[k]])

                    let alreadyExist = threeSum.some(arr => arr[0] === triplet[0] && arr[1] === triplet[1] && arr[2] === triplet[2])
                    console.log("alreadyExist", alreadyExist)
                    if (alreadyExist || j == k ) {
                        j++;
                        k--;
                        continue;
                    }

                    threeSum.push([sortedNums[i], sortedNums[j], sortedNums[k]].sort((a, b) => a - b))
                }
            }
        }

        return threeSum;
    }
}
