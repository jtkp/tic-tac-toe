// Rule of thumb: if you only ever need ONE of something 
// (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), 
// create them with factories.

const BLANK = false;
const X = 1;
const O = -1;
let playerX = null;
let playerO = null;
let currentPlayer = null;

const game = (() => {

    const pvp = document.querySelector('#pvp');
    pvp.addEventListener('click', () => startPVPGame());

    function startPVPGame() {
        playerX = Player(X, 'images/x.png');
        playerO = Player(O, 'images/o.png');
        currentPlayer = playerX;
    }

    return {
    };
})();

const board = (() => {
    let board = [[BLANK, BLANK, BLANK],
                [BLANK, BLANK, BLANK],
                [BLANK, BLANK, BLANK]];

    const cells = document.querySelectorAll('.cell');
    cells.forEach(element => {
        element.addEventListener('click', event => placeMarker(event.target.dataset.index));
    });

    function placeMarker(index) {
        indexSplit = index.split(',');
        const x = indexSplit[0];
        const y = indexSplit[1];

        if (board[x][y] === BLANK) {
            board[x][y] = currentPlayer.getSymbol();
            const cell = document.querySelector(`div[data-index="${index}"]`);
            cell.appendChild(currentPlayer.getImg());
        }

        if (isGameOver(x, y)) {
            display.showWinner();
        } else {
            if (currentPlayer === playerX) {
                currentPlayer = playerO;
            } else {
                currentPlayer = playerX;
            }
        }
    }

    function isGameOver(x, y) {
        if (Math.abs(board[0][y] + board[1][y] + board[2][y] === 3) ||
            Math.abs(board[x][0] + board[x][1] + board[x][2] === 3)) {
            return true;
        } else if (x === y) {
            if (Math.abs(board[0][0] + board[1][1] + board[2][2] === 3)) {
                return true;
            }
        } else if ((x === 0 && y === 2) || (x === 2 && y === 0)) {
            if (Math.abs(board[0][2] + board[1][1] + board[0][2] === 3)) {
                return true;
            }
        }
        return false;
    }

    return {

    };
})();

const Player = (symbol, imageURL) => {
    const getSymbol = () => symbol;

    const getImg = () => {
        const img = document.createElement('img');
        img.setAttribute('src', imageURL);
        return img;
    };


    return {
        getSymbol,
        getImg
    };
};

const display = (() => {

    const container = document.querySelector(`#container`);

    const showWinner = () => {
        let winner;
        if (currentPlayer.getSymbol() === X) {
            winner = 'X';
        } else {
            winner = 'O';
        }

        const p = document.createElement('p');
        p.innerHTML = `${winner} wins this round!`;

        console.log(`${winner} wins this round!`);
        container.appendChild(p);
    }

    return {
        showWinner
    };
})();