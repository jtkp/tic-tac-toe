// Rule of thumb: if you only ever need ONE of something 
// (gameBoard, displayController), use a module. 
// If you need multiples of something (players!), 
// create them with factories.

const BLANK = false;

const gameBoard = (() => {
    let board = [[BLANK, BLANK, BLANK],
                [BLANK, BLANK, BLANK],
                [BLANK, BLANK, BLANK]];

    
    return {

    };
})();