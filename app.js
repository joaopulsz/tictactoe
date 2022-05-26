const squares = document.querySelectorAll('.square');

let lastMove = 'x';

const makeAMove = (square) => {

    if (lastMove === 'x') {
        square.innerText = 'o';
        lastMove = 'o';
    } else if (lastMove === 'o') {
        square.innerText = 'x';
        lastMove = 'x';
    }

    if (squares[0].innerText === 'x' && squares[1].innerText === 'x' && squares[2].innerText === 'x') {
        console.log('cross wins');
    } else if (squares[3].innerText === 'x' && squares[4].innerText === 'x' && squares[5].innerText === 'x') {
        console.log('cross wins');
    } else if (squares[6].innerText === 'x' && squares[7].innerText === 'x' && squares[8].innerText === 'x') {
        console.log('cross wins');
    } else if (squares[1].innerText === 'x' && squares[4].innerText === 'x' && squares[7].innerText === 'x') {
        console.log('cross wins');
    } else if (squares[2].innerText === 'x' && squares[5].innerText === 'x' && squares[8].innerText === 'x') {
        console.log('cross wins');
    } else if (squares[0].innerText === 'x' && squares[4].innerText === 'x' && squares[8].innerText === 'x') {
        console.log('cross wins');
    } else if (squares[2].innerText === 'x' && squares[4].innerText === 'x' && squares[6].innerText === 'x') {
        console.log('cross wins');
    } else if (squares[0].innerText === 'o' && squares[1].innerText === 'o' && squares[2].innerText === 'o') {
        console.log('circle wins');
    } else if (squares[3].innerText === 'o' && squares[4].innerText === 'o' && squares[5].innerText === 'o') {
        console.log('circle wins');
    } else if (squares[6].innerText === 'o' && squares[7].innerText === 'o' && squares[8].innerText === 'o') {
        console.log('circle wins');
    } else if (squares[1].innerText === 'o' && squares[4].innerText === 'o' && squares[7].innerText === 'o') {
        console.log('circle wins');
    } else if (squares[2].innerText === 'o' && squares[5].innerText === 'o' && squares[8].innerText === 'o') {
        console.log('circle wins');
    } else if (squares[0].innerText === 'o' && squares[4].innerText === 'o' && squares[8].innerText === 'o') {
        console.log('circle wins');
    } else if (squares[2].innerText === 'o' && squares[4].innerText === 'o' && squares[6].innerText === 'o') {
        console.log('circle wins');
    }

}

squares.forEach(square => {
    square.addEventListener('click', function handler() {
        makeAMove(square);
        this.removeEventListener('click', handler);
    });
})