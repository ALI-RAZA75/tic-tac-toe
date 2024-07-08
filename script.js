let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#resetbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-game-btn");

let trueO = true;

let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(trueO){
            box.innerText = "O";
            trueO = false;
        } else{
            box.innerText = "X";
            trueO = true;
        }
        box.disabled = true;

        winnner();
    })
});
const newGameB = () => {
    newGameBtn.addEventListener("click", () => {
        msgContainer.classList.add("hide");

    })
}

const disabledBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
        newGameB();
    }
}

const resetGame = () => {
    trueO = true;
    boxEnabled();
    msgContainer.classList.add("hide");
}

const boxEnabled = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (pos1val) => {
    msg.innerHTML = `Congragulation winner is ${pos1val}`;
   msgContainer.classList.remove("hide");
   disabledBoxes();
  
}
const winnner = () => {
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);

            }
            
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click", resetGame);
