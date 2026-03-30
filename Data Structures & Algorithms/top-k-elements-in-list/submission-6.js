class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let hashMap = {};


        nums.forEach(num => {
            if (hashMap[num]) {
                hashMap[num] += 1;
            } else {
                hashMap[num] = 1;
            }
        })

        let bucket = [];
        bucket[0] = [];
        for (const [key, value] of Object.entries(hashMap)) {
            if (!bucket[value]) {
                bucket[value] = []
            }
            bucket[value].push(Number(key))
        }


        let kArr = [];
        for (let i = bucket.length - 1; i >= 0 && kArr.length < k; i--) {

            if(bucket[i]){
                for(const num of bucket[i]){
                    kArr.push(num)

                    if(kArr.length === k) break;
                }
            }
        }

        return kArr;


    }
}
