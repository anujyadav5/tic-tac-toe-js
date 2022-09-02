const board = document.getElementsByClassName("board")[0];


const gameBoard = (() => {
    return [
        ["x", "x", "o"],
        ["o", "o", "x"],
        ["x", "x", "o"]
    ]
})();

const players = () => {

}

const gamePlay = (() => {

})();

function display(arr) {
    for (subArr in arr) {
        for (i in arr[subArr]) {
            board.innerHTML += `<p>${arr[subArr][i]}</p>`;
        }
    }
}

display(gameBoard);