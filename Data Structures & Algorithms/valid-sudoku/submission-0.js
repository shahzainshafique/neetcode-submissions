class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
   const rows = new Set();
        const cols = new Set();
        const boxes = new Set();

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {

                const value = board[i][j];

                if (value === ".") continue;

                const rowKey = `row-${i}-${value}`;
                const colKey = `col-${j}-${value}`;

                const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                const boxKey = `box-${box}-${value}`;

                if (
                    rows.has(rowKey) ||
                    cols.has(colKey) ||
                    boxes.has(boxKey)
                ) {
                    return false;
                }

                rows.add(rowKey);
                cols.add(colKey);
                boxes.add(boxKey);
            }
        }
        return true;
    }
}
