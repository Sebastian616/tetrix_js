const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);

context.fillstyle = '#000';
context.fillRect(0, 0, canvas.width, canvas.height);

console.log('canvas configurado correctamente')

const rows = 20;
const cols = 10;

const board = Array.from({ lenght: rows}, ()=> Array(cols).fill(0));

function drawboard() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            context.fillstyle = board[row][col] ? 'blue' : 'black';
            context.fillRect(col, row, 1, 1);
            context.strokeStyle = 'white';
            context.strokeRect(col, row, 1, 1);
        }
    }
}

drawboard();

const tetrominos = {
    I: [
        [1, 1, 1, 1]
    ],
    O: [
        [1, 1],
        [1, 1]
    ],
    T:[
        [0, 1, 0],
        [1, 1, 1]
    ],
    S: [
        [0, 1, 1],
        [1, 1, 0]
    ],
    Z: [
        [1, 1, 0],
        [0, 1, 1]
    ],
    J:[
        [1,0,0],
        [1,1,1]
    ]
};
function drawPiece(piece, offsetX, offsetY) {
    piece.forEach((row, y) =>{
        row.forEach((value, x) => {
            if (value) {
                context.fillstyle = 'red';
                context.fillRect
            }
        })
    })
}