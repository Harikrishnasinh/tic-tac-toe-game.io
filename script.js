console.log("hello world");
let playerDefault = "X";
arr = Array(9).fill(null);

function checkWinner(element) {
    // console.log(checkWinner);
    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8])
    ) {
        // document.write("winnner is " + element);
        let winner = document.getElementById("winner");
        console.log(winner.innerText = playerDefault);
        console.log(winner);
        console.log("winner is " + element);
        console.log(document.getElementById("popup"));
        playerDefault = "X";
        popup = document.getElementById("popup");
        popup.classList.add("popup-visible");
        return;
    }
}

let turn = document.getElementById("turn");
function button_clicked(ele) {
    console.log(ele.id);
    ele.innerText = playerDefault;
    console.log(playerDefault);
    checkWinner();
    playerDefault = playerDefault == "X" ? "O" : "X";
    turn.innerText = playerDefault;

    console.log(playerDefault);
    console.log(arr);

    arr[ele.id] = playerDefault;
    console.log(arr);

    if (
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]) ||
        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8])
    ) {
        playerDefault = playerDefault === "X" ? "O" : "X";
        console.log();
        checkWinner(playerDefault);
    }
}

// for continuing playing
function continuePlaying() {
    // console.log(arr);
    col = document.querySelectorAll(".col");
    // for (let elem = 0; elem < 9; elem++) {
        // }
        // // console.log(col);
        // console.log(col);
        col.forEach(element => {
            element.innerText = '';
            // console.log(element)
        });
        for (let i = 0; i < arr.length; i++) {
            arr[i] = null;
        }
    // arr[0] = null;
    // console.log(arr);
    popup.classList.remove("popup-visible");
    playerDefault = "X";
    turn.innerText = playerDefault;
    // window.location.href = "index.html";
}

function exit() {
    popup.classList.remove("popup-visible");
}
