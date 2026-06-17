class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int l = 0;
        int r = numbers.length - 1;

        int[] result = new int[2];

        while(l<r) {
            if(numbers[l] + numbers[r] < target) {
                l = l + 1;
            } else if (numbers[l] + numbers[r] > target) {
                r = r-1;
            } else {
                result[0] = l+1;
                result[1] = r+1;
                break;
            }
        }

        return result;
    }
}
