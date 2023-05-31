const Player = function(name, symbol, turn) {
    return { name, symbol, turn}
};

const GameBoard = (() => {
    const arr = ['', '', '', '', '', '', '', '', ''];
    const checkGameOver = function() {

        

        if(((arr[0] === arr[1]) && (arr[1] === arr[2]) && (arr[0] === 'X')) || ((arr[0] === arr[1]) && (arr[1] === arr[2]) && (arr[0] === 'O')))
        {
            return arr[0];
        }
        else if (((arr[3] === arr[4]) && (arr[4] === arr[5]) && (arr[3] === 'X')) || ((arr[3] === arr[4]) && (arr[4] === arr[5]) && (arr[3] === 'O')))
        {
            return arr[3];
        }
        else if (((arr[6] === arr[7]) && (arr[7] === arr[8]) && (arr[6] === 'X')) || ((arr[6] === arr[7]) && (arr[7] === arr[8]) && (arr[6] === 'O')))
        {
            return arr[6];
        }
        else if (((arr[0] === arr[3]) && (arr[3] === arr[6]) && (arr[0] === 'X')) || ((arr[0] === arr[3]) && (arr[3] === arr[6]) && (arr[0] === 'O')))
        {
            return arr[0];
        }
        else if (((arr[1] === arr[4]) && (arr[4] === arr[7]) && (arr[1] === 'X')) || ((arr[1] === arr[4]) && (arr[4] === arr[7]) && (arr[1] === 'O')))
        {
            return arr[1];
        }
        else if (((arr[2] === arr[5]) && (arr[5] === arr[8]) && (arr[2] === 'X')) || ((arr[2] === arr[5]) && (arr[5] === arr[8]) && (arr[2] === 'O')))
        {
            return arr[2];
        }
        else if (((arr[0] === arr[4]) && (arr[4] === arr[8]) && (arr[0] === 'X')) || ((arr[0] === arr[4]) && (arr[4] === arr[8]) && (arr[0] === 'O')))
        {
            return arr[0];
        }
        else if (((arr[2] === arr[4]) && (arr[4] === arr[6]) && (arr[2] === 'X')) || ((arr[2] === arr[4]) && (arr[4] === arr[6]) && (arr[2] === 'O')))
        {
            return arr[2];
        }
        else 
        {
            return '';
        }
    };

    const placeSymbol = function(symbol, pos) {
        arr[pos] = symbol;
    };

    const clear = function() {
        for(let i = 0; i < 9; i++)
        {
            arr[i] = ' ';
        }
    };


    return { arr, 
             checkGameOver, 
             placeSymbol, 
             clear,
        }
})();

const DisplayController = (() => {
    const cButton = document.querySelector('#start-button');

    const cells = document.querySelectorAll('.cell');

    const populateBoard = function() {

        cells.forEach((cell) => {

            const val = cell.getAttribute('data-value');

            cell.textContent = GameBoard.arr[val];

        });

    };


    const tie = () => {
        const htmlElement = document.querySelector('.winner');
        htmlElement.textContent = 'Tie. No winner';
    };
    
    const winner = (name) => {
        const htmlElement2 = document.querySelector('.winner');
        htmlElement2.textContent = name + ' is the winner!';
    };

    const setEventCells = function() {

        cells.forEach( (cell) => {
            cell.addEventListener('click', () => {
                if(p1.turn)
                {
                    if(GameBoard.arr[cell.getAttribute('data-value')] === '')
                    {
                        GameBoard.placeSymbol(p1.symbol, cell.getAttribute('data-value'));
                        populateBoard();
                        p1.turn = false;
                        p2.turn = true;
                    }
                }
                else
                {
                    if(GameBoard.arr[cell.getAttribute('data-value')] === '')
                    {
                        GameBoard.placeSymbol(p2.symbol, cell.getAttribute('data-value'));
                        populateBoard();
                        p1.turn = true;
                        p2.turn = false;
                    }
                    
                }

                if( GameBoard.checkGameOver() !== '')
                {
                    if(GameBoard.checkGameOver() === 'X')
                    {
                        winner(p1.name);
                    }
                    else
                    {
                        winner(p2.name);
                    }
                   
                }

                if(checkEmptySpace() === 0)
                {
                    tie();
                }
                
            });
        });

    };

    cButton.addEventListener('click', () => {

        setEventCells();
    });


})();

const checkEmptySpace = () => {
    let count = 9;

    for(let i = 0; i < 9; i++)
    {
        if(GameBoard.arr[i] !== '')
        {
            count--;
        }
    }
    return count;
};



const p1 = Player('Player 1', 'X', true);
const p2 = Player('Player 2', 'O', false);



