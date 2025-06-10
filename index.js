//initialize counts
let homeCount = 0
let guestCount = 0

//select result elements
let homeResult = document.getElementById("home-result")
let guestResult = document.getElementById("guest-result")

function addOnePoint() {
    homeCount += 1
    homeResult.textContent = homeCount
}

function addTwoPoints() {
    console.log("clicked")
    homeCount += 2
    homeResult.textContent = homeCount
}

function addThreePoints() {
    homeCount += 3
    homeResult.textContent = homeCount
}


function addOnePointGuest() {
    guestCount += 1
    guestResult.textContent = guestCount
}

function addTwoPointsGuest() {
    console.log("clicked")
    guestCount += 2
    guestResult.textContent = guestCount
}

function addThreePointsGuest() {
    guestCount += 3
    guestResult.textContent = guestCount
}