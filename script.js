const gridSpace = 30;

let fallingPiece;
let gridPiece =[];
let lineFades = [];
let gridWorkers = [];

let currentScore = 0;
let currentLevel = 0;
let lineCleared = 0;

let ticks = 0;
let updateEvery = 15;
let updateEveryCurrent = 0.5;
let fallSpeed = gridSpace * 0.5;
let pauseGame = false;
let gameOver = false;

const gameEdgeLeft = 150;
const gameEdgeRight = 450;

const color = [
    '#dca3ff',
    '#ff90a0',
    '#80ffb4',
    '#ff7666',
    '#70b3f5',
    '#b2e77d',
    '#ffd700',
];

function setup(){
    createCanvas(600,540);

    fallingPiece = new PlayerPiece();
    fallingPiece.resetPiece();

    textFont('ubuntu');
}

function draw(){
    const colorDark = '#0d0d0d';
    const colorLight = '#304550';
    const colorBackground = '#e1eeb0';

    colorBackground(colorBackground);

    fill(25);
    noStroke();
    rect(gameEdgeRight,0,)
}