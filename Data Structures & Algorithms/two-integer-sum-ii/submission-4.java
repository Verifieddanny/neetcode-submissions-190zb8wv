class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int l = 0;
        int r = numbers.length - 1;

        while(l<r) {
            int currentTotal = numbers[l] + numbers[r];

            if(currentTotal < target) {
                l++;
            } else if (currentTotal > target) {
                r--;
            } else {
                return new int[] {l+1, r+1};
            }
        }

        return new int[] {};
    }
}
