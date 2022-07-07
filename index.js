// Rule of thumb: if you only ever need ONE of something 
// (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), 
// create them with factories.

const BLANK = false;
let currentPlayer = null;

const game = (() => {

    const pvp = document.querySelector('#pvp');
    pvp.addEventListener('click', () => startPVPGame());

    function startPVPGame() {
        currentPlayer = Player('x', 'images/x.png');
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
    }

    return {

    };
})();

const Player = (symbol, imageURL) => {
    const getSymbol = () => symbol;

    const img = document.createElement('img');
    img.setAttribute('src', imageURL);

    const getImg = () => img;


    return {
        getSymbol,
        getImg
    };
};

const display = (() => {


    return {

    };
})();