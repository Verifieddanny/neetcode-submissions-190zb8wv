class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let minX = 0;
        let maxX = matrix.length - 1;

        let minY = 0;
        let maxY = matrix[0].length - 1;

        let i = Math.floor((minX + maxX) / 2)

        while (minX <= maxX) {
            i = Math.floor((minX + maxX) / 2);
            if (matrix[i][0] > target) {
                maxX = i - 1
            } else if (matrix[i][matrix[i].length - 1] < target) {
                minX = i + 1
            } else {
                break
            }
        }

        let j = Math.floor((minY + maxY) / 2)


        while (minY <= maxY) {
            j = Math.floor((minY + maxY) / 2)
            if (matrix[i][j] > target) {
                maxY = j - 1
            } else if (matrix[i][j] < target) {
                minY = j + 1
            } else if (matrix[i][j] === target) {
                return true
            }
        }

        return false
    }
}
