class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        if (B.length < A.length) [A, B] = [B, A];

        const total = A.length + B.length;
        let half = Math.floor((total + 1) / 2)



        let l = 0;
        let r = A.length;


        while (l <= r) {
            let i = Math.floor((l + r) / 2);
            let j = half - i;


            let ALeft = (i > 0) ? A[i - 1] : -Infinity;
            let ARight = (i < A.length) ? A[i] : Infinity;
            let BLeft = (j > 0) ? B[j - 1] : -Infinity;
            let BRight = (j < B.length) ? B[j] : Infinity;

            if (ALeft <= BRight && BLeft <= ARight) {
                if (total % 2 === 0) {
                    return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
                }
                return Math.max(ALeft, BLeft);
            } else if (ALeft > BRight) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
    }
}