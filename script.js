const Player = function(name, symbol) {
    return { name, symbol}
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
            arr[i] = '';
        }
    };

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


    return { arr, 
             checkGameOver, 
             placeSymbol, 
             clear,
             checkEmptySpace,
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

    const eraseWinner = () => {
        const htmlElement2 = document.querySelector('.winner');
        htmlElement2.textContent = name + '';
    };


    const setEventCells = function() {

        cells.forEach( (cell) => {
            cell.addEventListener('click', () => {
                if(GameController.turn % 2 === 1)
                {
                    if(GameBoard.arr[cell.getAttribute('data-value')] === '')
                    {
                        GameBoard.placeSymbol(GameController.p1.symbol, cell.getAttribute('data-value'));
                        populateBoard();
                        GameController.turn++;
                    }
                }
                else
                {
                    if(GameBoard.arr[cell.getAttribute('data-value')] === '')
                    {
                        GameBoard.placeSymbol(GameController.p2.symbol, cell.getAttribute('data-value'));
                        populateBoard();
                        GameController.turn++;
                    }
                    
                }

                if( GameBoard.checkGameOver() !== '')
                {
                    if(GameBoard.checkGameOver() === 'X')
                    {
                        winner(GameController.p1.name);
                        return;
                    }
                    else
                    {
                        winner(GameController.p2.name);
                        return;
                    }
                   
                }

                if(GameBoard.checkEmptySpace() === 0)
                {
                    tie();
                }
                
            });
        });

    };

    cButton.addEventListener('click', () => {
        GameBoard.clear();
        GameController.turn = 1;
        eraseWinner();
        populateBoard();
        setEventCells();
    });


})();


const GameController = (() => {

    let turn = 1;

    let name1 = 'Player 1';
    let name2 = 'Player 2';
    
   

    

    let p1 = Player(name1, 'X')

    let p2 = Player(name2, 'O');


    return { turn, p1, p2, name1, name2, }

})();


const changeNames = (event) => {
    event.preventDefault();
    let name1 = document.getElementById('Player1').value;
    let name2 = document.getElementById('Player2').value;
    GameController.p1.name = name1;
    GameController.p2.name = name2;
};






