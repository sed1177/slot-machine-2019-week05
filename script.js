const spinBtn = document.getElementById('spinBtn')
const resetBtn = document.getElementById('resetBtn')
const slot1 = document.getElementById('slot1')
const slot2 = document.getElementById('slot2')
const slot3 = document.getElementById('slot3')
const result = document.getElementById('result')
const balanceDisplay = document.getElementById('balance')

// storing shows in an array
const shows = ["Money Heist", "Love Island", "Prison Break", "Breaking Bad", "Stranger Things"]

// users balance
let balance = 0

// getting a random show from the array!
function randomShow() {
  return shows[Math.floor(Math.random() * shows.length)]
}

// smurf on click event for spinning button
spinBtn.addEventListener('click', () => {
    // get a random show
  const show1 = randomShow()
  const show2 = randomShow()
  const show3 = randomShow()

//   put the array value in the UI
  slot1.textContent = show1
  slot2.textContent = show2
  slot3.textContent = show3

//   core logic

  if (show1 === show2 && show2 === show3) {
    result.textContent = "🎉 Jackpot! All three match! You won $500!"
    result.style.color = "green"
    balance += 500
  } else if (show1 === show2 || show2 === show3 || show1 === show3) {
    result.textContent = "👏 Nice! Two shows match! You won $250!"
    result.style.color = "orange"
    balance += 250
  } else {
    result.textContent = "😢 No matches, try again!"
    result.style.color = "red"
  }

//   users balance
  balanceDisplay.textContent = `💵 Balance: $${balance}`
})

// reset balace to ZERO and put ? in each box 
resetBtn.addEventListener('click', () => {
  balance = 0
  balanceDisplay.textContent = "💵 Balance: $0"
  result.textContent = ""
  slot1.textContent = "?"
  slot2.textContent = "?"
  slot3.textContent = "?"
})
