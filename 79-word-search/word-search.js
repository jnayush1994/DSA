/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let result = false;
    let m = board.length;
    let n = board[0].length;

    const backtrack = (x, y, nextIdx) => {
        if (nextIdx === word.length) {
            result = true;
        }
        let original = board[x][y];
        board[x][y] = '#';
        if (y < n - 1 && board[x][y + 1] === word[nextIdx])
            backtrack(x, y + 1, nextIdx + 1);
        if (y > 0 && board[x][y - 1] === word[nextIdx])
            backtrack(x, y - 1, nextIdx + 1);
        if (x < m - 1 && board[x + 1][y] === word[nextIdx])
            backtrack(x + 1, y, nextIdx + 1);
        if (x > 0 && board[x - 1][y] === word[nextIdx])
            backtrack(x - 1, y, nextIdx + 1);
        board[x][y] = original;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0])
                backtrack(i, j, 1);
        }
    }

    return result;
};