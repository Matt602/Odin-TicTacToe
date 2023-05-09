const Player = function(name, symbol, turn) {
    return { name, symbol, turn}
};

const GameBoard = (() => {
    let arr = ['O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X']
    const checkGameOver = function() {
        if( (arr[0] === arr[1] === arr[2]) )
        {
            return arr[0];
        }
        else if ( (arr[3] === arr[4] === arr[5]) )
        {
            return arr[3];
        }
        else if ( (arr[6] === arr[7] === arr[8]) )
        {
            return arr[6];
        }
        else if ( (arr[0] === arr[3] === arr[6]) )
        {
            return arr[0];
        }
        else if ( (arr[1] === arr[4] === arr[7]) )
        {
            return arr[1];
        }
        else if ( (arr[2] === arr[5] === arr[8]) )
        {
            return arr[2];
        }
        else if ( (arr[0] === arr[4] === arr[8]) )
        {
            return arr[0];
        }
        else if ( (arr[2] === arr[4] === arr[6]) )
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

    const test = "Hello worls";

    return { arr, 
             checkGameOver, 
             placeSymbol, 
             clear,
            test, 
        }
})();

const DisplayController = (() => {
    const cButton = document.querySelector('#start-button');

    cButton.addEventListener('click', () => {
        console.log(GameBoard.test);
    });

})();
