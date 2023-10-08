
let countHomeEl = document.getElementById("count-home-el")
let countGuestEl = document.getElementById("count-guest-el")
let count = 0

function plusOne() {
    count += 1
    countHomeEl.innerText = count
}

function plusTwo() {
    count += 2
    countHomeEl.innerText = count
}

function plusThree() {
    count += 3
    countHomeEl.innerText = count
}

function plusOneGuest() {
    count += 1
    countGuestEl.innerText = count
}

function plusTwoGuest() {
    count += 2
    countGuestEl.innerText = count
}

function plusThreeGuest() {
    count += 3
    countGuestEl.innerText = count
}



function newGame() {
    countHomeEl.textContent = 0
    countGuestEl.textContent = 0
    count = 0
}