const squares = document.querySelectorAll('.square');
const body = document.querySelector('body');

const singlePlayerButton = document.querySelector('#single-player');
const versusButton = document.querySelector('#vs');

let lastMove = 'x';

const singlePlayerGame = () => {
  
}

const versusGame = () => {

  const makeAMove = (square) => {

      if (lastMove === 'x') {
        square.innerText = 'o';
        lastMove = 'o';
      } else if (lastMove === 'o') {
        square.innerText = 'x';
        lastMove = 'x';
      }

      if (squares[0].innerText === 'x' && squares[1].innerText === 'x' && squares[2].innerText === 'x') {
        endGame(0, 1, 2);
      } else if (squares[3].innerText === 'x' && squares[4].innerText === 'x' && squares[5].innerText === 'x') {
        endGame(3, 4, 5);
      } else if (squares[6].innerText === 'x' && squares[7].innerText === 'x' && squares[8].innerText === 'x') {
        endGame(6, 7, 8);
      } else if (squares[0].innerText === 'x' && squares[3].innerText === 'x' && squares[6].innerText === 'x') {
        endGame(0, 3, 6);
      } else if (squares[1].innerText === 'x' && squares[4].innerText === 'x' && squares[7].innerText === 'x') {
        endGame(1, 4, 7);
      } else if (squares[2].innerText === 'x' && squares[5].innerText === 'x' && squares[8].innerText === 'x') {
        endGame(2, 5, 8);
      } else if (squares[0].innerText === 'x' && squares[4].innerText === 'x' && squares[8].innerText === 'x') {
        endGame(0, 4, 8);
      } else if (squares[2].innerText === 'x' && squares[4].innerText === 'x' && squares[6].innerText === 'x') {
        endGame(2, 4, 6);
      } else if (squares[0].innerText === 'o' && squares[1].innerText === 'o' && squares[2].innerText === 'o') {
        endGame(0, 1, 2);
      } else if (squares[3].innerText === 'o' && squares[4].innerText === 'o' && squares[5].innerText === 'o') {
        endGame(3, 4, 5);
      } else if (squares[6].innerText === 'o' && squares[7].innerText === 'o' && squares[8].innerText === 'o') {
        endGame(6, 7, 8);
      } else if (squares[0].innerText === 'o' && squares[3].innerText === 'o' && squares[6].innerText === 'o') {
        endGame(0, 3, 6);
      } else if (squares[1].innerText === 'o' && squares[4].innerText === 'o' && squares[7].innerText === 'o') {
        endGame(1, 4, 7);
      } else if (squares[2].innerText === 'o' && squares[5].innerText === 'o' && squares[8].innerText === 'o') {
        endGame(2, 5, 8);
      } else if (squares[0].innerText === 'o' && squares[4].innerText === 'o' && squares[8].innerText === 'o') {
        endGame(0, 4, 8);
      } else if (squares[2].innerText === 'o' && squares[4].innerText === 'o' && squares[6].innerText === 'o') {
        endGame(2, 4, 6);
      }
    }

    const endGame = (square1, square2, square3) => {
      squares[square1].style.color = 'green';
      squares[square2].style.color = 'green';
      squares[square3].style.color = 'green';
    }

    squares.forEach(square => {
      square.addEventListener('click', function handler() {
          makeAMove(square);
          this.removeEventListener('click', handler);
        });
      })
}

versusButton.addEventListener('click', () => {
    squares.forEach(square => {
      square.innerText = ''
      square.style.color = 'black'
    });
    versusGame();
});

singlePlayerButton.addEventListener('click', () => {
  squares.forEach(square => {
    square.innerText = ''
    square.style.color = 'black'
  });
  singlePlayerGame();
})
