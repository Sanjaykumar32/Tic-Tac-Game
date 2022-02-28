var ActivPlayer = "X"
var action = Array(9).fill(null)

function run(e, btnIndex) {
    // console.log(e ,btnIndex)
    var btnText = e.target.innerText

    if (btnText != "X" && btnText != "O") {
        e.target.innerText = ActivPlayer
        // console.log(e.target.innerText)
        action[btnIndex] = ActivPlayer
        // console.log(action[btnIndex])
        if (checkWinner(ActivPlayer)) {
            //    alert(`${ActivPlayer} is Winner`)
            document.getElementById("win").innerText = `${ActivPlayer} is winner`
            resetGame()
        } else if (isDraw()) {
            //    alert("Game Over")
            document.getElementById("win").innerText = `${ActivPlayer} is winner`
            resetGame()
        } else {
            ActivPlayer = ActivPlayer == "X" ? "O" : "X"
        }
    }
}
function isDraw() {
    return !action.includes(null)
}

function checkWinner(player) {
    var winningPos = [
        [0, 4, 8],
        [2, 4, 6],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]

    ]
    var isWinner = false

    winningPos.forEach(function (pos) {
        if (action[pos[0]] == player && action[pos[1]] == player && action[pos[2]] == player) {
            isWinner = true
        } 
    })
    return isWinner
}

function resetGame() {
    var bts = document.getElementsByTagName("button")
    // console.log(bts)
    var btsArr = Array.from(bts)
    // console.log(btsArr)
    btsArr.forEach(function (btn) {
        btn.innerText = "-"
    })
    action = Array(9).fill(null)
}

// ludo game :--

var turn = 1
var score1 = 0
var score2 = 0
document.getElementById("ludobtn").addEventListener("click", function () {

    var rand = parseInt((Math.random() * 1000000) % 6 + 1)
    //  console.log(rand)

    var img = document.getElementById("img")
    img.src = `${rand}.png`

    var box1 = document.getElementById("box1")
    var box2 = document.getElementById("box2")
    //    console.log(box1)

    if (turn == 1) {
        score1 += rand
        box1.innerText = score1
        if (checkWinner(score1)) {
            // alert("player 1 is won")
            box1.innerText = "player 1 is won "
        } else {
            turn = 2
        }
    } else {
        score2 += rand
        box2.innerText = score2
        if (checkWinner(score2)) {
            // alert(" player 2 is won")
            box2.innerText = "player 2 is won "
        } else {
            turn = 1
        }
    }
     
})

function checkWinner(scor) {
    if (scor >= 25) {
        return true
    } else {
        return false
    }
}