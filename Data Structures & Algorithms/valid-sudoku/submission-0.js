class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        let colHashMap = {};
        let rowHashMap = {};
        let squareHashMap = {};

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === ".") continue;

                if(!colHashMap[j]) colHashMap[j] = [];
                if(!rowHashMap[i]) rowHashMap[i] = [];
                if(!squareHashMap[`${Math.floor(i / 3)},${Math.floor(j / 3)}`]) squareHashMap[`${Math.floor(i / 3)},${Math.floor(j / 3)}`] = [];
                if (colHashMap[j].includes(board[i][j]) || rowHashMap[i].includes(board[i][j]) || squareHashMap[`${Math.floor(i / 3)},${Math.floor(j / 3)}`].includes(board[i][j])){
                    return false
                }

                colHashMap[j].push(board[i][j]);
                rowHashMap[i].push(board[i][j]);
                squareHashMap[`${Math.floor(i / 3)},${Math.floor(j / 3)}`].push(board[i][j])
            }
        }

        return true
    }
}
