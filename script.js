//select chips

let betSize = 1

const bet1 = document.getElementById('bet-1')
const bet10 = document.getElementById('bet-10')
const bet100 = document.getElementById('bet-100')
const bet500 = document.getElementById('bet-500')

bet1.addEventListener('click', function () {
  bet1.style.transform = 'scale(1.2)'
  bet10.style.transform = 'scale(0.9)'
  bet100.style.transform = 'scale(0.9)'
  bet500.style.transform = 'scale(0.9)'
  betSize = 1
})
bet10.addEventListener('click', function () {
  bet10.style.transform = 'scale(1.2)'
  bet1.style.transform = 'scale(0.9)'
  bet100.style.transform = 'scale(0.9)'
  bet500.style.transform = 'scale(0.9)'
  betSize = 10
})
bet100.addEventListener('click', function () {
  bet100.style.transform = 'scale(1.2)'
  bet1.style.transform = 'scale(0.9)'
  bet10.style.transform = 'scale(0.9)'
  bet500.style.transform = 'scale(0.9)'
  betSize = 100
})
bet500.addEventListener('click', function () {
  bet500.style.transform = 'scale(1.2)'
  bet1.style.transform = 'scale(0.9)'
  bet10.style.transform = 'scale(0.9)'
  bet100.style.transform = 'scale(0.9)'
  betSize = 500
})

//set initial balance
let money = 2000

//numbers variable

const number0 = document.getElementById('0')
const number1 = document.getElementById('1')
const number2 = document.getElementById('2')
const number3 = document.getElementById('3')
const number4 = document.getElementById('4')
const number5 = document.getElementById('5')
const number6 = document.getElementById('6')
const number7 = document.getElementById('7')
const number8 = document.getElementById('8')
const number9 = document.getElementById('9')
const number10 = document.getElementById('10')
const number11 = document.getElementById('11')
const number12 = document.getElementById('12')
const number13 = document.getElementById('13')
const number14 = document.getElementById('14')
const number15 = document.getElementById('15')
const number16 = document.getElementById('16')
const number17 = document.getElementById('17')
const number18 = document.getElementById('18')
const number19 = document.getElementById('19')
const number20 = document.getElementById('20')
const number21 = document.getElementById('21')
const number22 = document.getElementById('22')
const number23 = document.getElementById('23')
const number24 = document.getElementById('24')
const number25 = document.getElementById('25')
const number26 = document.getElementById('26')
const number27 = document.getElementById('27')
const number28 = document.getElementById('28')
const number29 = document.getElementById('29')
const number30 = document.getElementById('30')
const number31 = document.getElementById('31')
const number32 = document.getElementById('32')
const number33 = document.getElementById('33')
const number34 = document.getElementById('34')
const number35 = document.getElementById('35')
const number36 = document.getElementById('36')

const numberOptions = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]
//insert bet
const insertBet = (number) => {
  if (betSize === 1) {
    console.log('betsize1')
    number.insertAdjacentHTML(
      'beforeend',
      "<div class='number-bet'><img src='https://i.ibb.co/ThQBv66/1.png' width='20px' height='20px'/></div>"
    )
  } else if (betSize === 10) {
    number.insertAdjacentHTML(
      'beforeend',
      "<div class='number-bet'><img src='https://i.ibb.co/K7khv0F/10.png' width='20px' height='20px'/></div>"
    )
  } else if (betSize === 100) {
    number.insertAdjacentHTML(
      'beforeend',
      "<div class='number-bet'><img src='https://i.ibb.co/kyDj7cG/100.png' width='20px' height='20px'/></div>"
    )
  } else if (betSize === 500) {
    number.insertAdjacentHTML(
      'beforeend',
      "<div class='number-bet'><img src='https://i.ibb.co/M59G0rv/500.png' width='20px' height='20px'/></div>"
    )
  }
}

buttonSound = document.querySelector('.button')
buttonSound.volume = 0.9
bet1.addEventListener('click', function () {
  if (buttonSound.paused) {
    buttonSound.play()
  } else {
    buttonSound.pause()
  }
})
bet10.addEventListener('click', function () {
  if (buttonSound.paused) {
    buttonSound.play()
  } else {
    buttonSound.pause()
  }
})
bet100.addEventListener('click', function () {
  if (buttonSound.paused) {
    buttonSound.play()
  } else {
    buttonSound.pause()
  }
})
bet500.addEventListener('click', function () {
  if (buttonSound.paused) {
    buttonSound.play()
  } else {
    buttonSound.pause()
  }
})

const addToNumberOptions = (number) => {
  numberOptions[number] += betSize
}

let actualBet = 0
let moneyBeforePlay = 2000

const moneyDisplay = document.getElementById('balance')
const subtractMoney = () => {
  money -= betSize
  moneyDisplay.innerHTML = `${money}`
  actualBet = actualBet + betSize
  showResetBet()
}

const resetBetButton = document.getElementById('reset')
const showResetBet = () => {
  resetBetButton.style.display = 'block'
}

resetBetButton.addEventListener('click', function () {
  document.querySelectorAll('.number-bet').forEach((bet) => bet.remove(bet))
  money += actualBet
  moneyDisplay.innerHTML = `${money}`
  actualBet = 0
  resetBetButton.style.display = 'none'
  resetAllArrays()
})

const checkMoney = () => {
  if (betSize === 1 && money >= 1) {
    return true
  } else if (betSize === 10 && money >= 10) {
    return true
  } else if (betSize === 100 && money >= 100) {
    return true
  } else if (betSize === 500 && money >= 500) {
    return true
  } else {
    return false
  }
}

let gameIsOn = false

number0.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number0)
    addToNumberOptions(0)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number1.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number1)
    addToNumberOptions(1)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number2.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number2)
    addToNumberOptions(2)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number3.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number3)
    addToNumberOptions(3)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number4.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number4)
    addToNumberOptions(4)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number5.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number5)
    addToNumberOptions(5)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number6.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number6)
    addToNumberOptions(6)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number7.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number7)
    addToNumberOptions(7)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number8.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number8)
    addToNumberOptions(8)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number9.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number9)
    addToNumberOptions(9)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number10.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number10)
    addToNumberOptions(10)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number11.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number11)
    addToNumberOptions(11)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number12.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number12)
    addToNumberOptions(12)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number13.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number13)
    addToNumberOptions(13)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number14.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number14)
    addToNumberOptions(14)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number15.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number15)
    addToNumberOptions(15)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number16.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number16)
    addToNumberOptions(16)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number17.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number17)
    addToNumberOptions(17)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number18.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number18)
    addToNumberOptions(18)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number19.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number19)
    addToNumberOptions(19)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number20.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number20)
    addToNumberOptions(20)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number21.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number21)
    addToNumberOptions(21)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number22.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number22)
    addToNumberOptions(22)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number23.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number23)
    addToNumberOptions(23)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number24.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number24)
    addToNumberOptions(24)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number25.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number25)
    addToNumberOptions(25)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number26.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number26)
    addToNumberOptions(26)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number27.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number27)
    addToNumberOptions(27)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number28.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number28)
    addToNumberOptions(28)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number29.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number29)
    addToNumberOptions(29)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number30.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number30)
    addToNumberOptions(30)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number31.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number31)
    addToNumberOptions(31)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number32.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number32)
    addToNumberOptions(32)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number33.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number33)
    addToNumberOptions(33)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number34.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number34)
    addToNumberOptions(34)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number35.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number35)
    addToNumberOptions(35)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
number36.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(number36)
    addToNumberOptions(36)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
const twoToOne3 = document.getElementById('3-36')
const twoToOne2 = document.getElementById('2-35')
const twoToOne1 = document.getElementById('1-34')

const columnOptions = [0, 0, 0]
const addToColumnOptions = (number) => {
  columnOptions[number] += betSize
}

twoToOne3.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(twoToOne3)
    addToColumnOptions(0)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
twoToOne2.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(twoToOne2)
    addToColumnOptions(1)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
twoToOne1.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(twoToOne1)
    addToColumnOptions(2)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})

const first12 = document.getElementById('1st12')
const second12 = document.getElementById('2nd12')
const third12 = document.getElementById('3rd12')

const rowOptions = [0, 0, 0]
const addToRowOptions = (number) => {
  rowOptions[number] += betSize
}

first12.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(first12)
    addToRowOptions(0)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
second12.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(second12)
    addToRowOptions(1)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
third12.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(third12)
    addToRowOptions(2)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})

const firstHalf = document.getElementById('1-18')
const secondHalf = document.getElementById('19-36')

const halfOptions = [0, 0]
const addToHalfOptions = (number) => {
  halfOptions[number] += betSize
}

firstHalf.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(firstHalf)
    addToHalfOptions(0)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
secondHalf.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(secondHalf)
    addToHalfOptions(1)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})

const even = document.getElementById('even')
const odd = document.getElementById('odd')

const evenOptions = [0, 0]
const addToEvenOptions = (number) => {
  evenOptions[number] += betSize
}

even.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(even)
    addToEvenOptions(0)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
odd.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(odd)
    addToEvenOptions(1)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})

const red = document.getElementById('red')
const black = document.getElementById('black')

const colorOptions = [0, 0]
const addToColorOptions = (number) => {
  colorOptions[number] += betSize
}

red.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(red)
    addToColorOptions(0)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})
black.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(black)
    addToColorOptions(1)
    subtractMoney()
  } else if (gameIsOn) {
    alert("You can't bet now!")
  } else {
    alert('Insufficient Money!')
  }
})

let actualNumber = null
let alreadyPlayed = false

//spinning wheel
let isSpinComplete = false
let isWheelSpin = false
const playBtn = document.querySelector('#play')
let actualDeg
const spin = () => {
  console.log('inside spin')
  console.log('spinning')
  const wheel = document.querySelector('.wheel')
  let isWheelSpin = true
  let deg = 0
  playBtn.style.pointerEvents = 'none'
  deg = 0 + Math.random() * 360
  actualDeg = deg
  // wheel.style.transform = `rotate(${actualDeg}deg)`
  console.log(deg)
  wheel.style.transition = 'all 1s ease-out'
  wheel.style.transform = `rotate(${deg}deg)`
  wheel.classList.add('blur')
  // if (insertBet()) {
  // wheel.addEventListener('transitionend', () => {
  //   console.log('trasitionend')
  //   wheel.classList.remove('blur')
  //   playBtn.style.pointerEvents = 'auto'
  //   wheel.style.transition = 'none'
  // })
  setTimeout(() => {
    isSpinComplete = true
    if (isSpinComplete) {
      console.log(actualDeg)
      spinResult()
      console.log(actualNumber)
      if (actualNumber !== 0 && actualNumber !== null) {
        console.log('made it here')
        checkWin()
      } else {
        resetAllArrays()
      }
    }
  }, 1000)

  // } else {
  //   console.log('pls insert bet')
  //   alert(`Please insert bet before start Play`)
  // }
}

playBtn.addEventListener('click', () => {
  console.log('click')
  spin()
})

wheelSound = document.querySelector('.spinning')
wheelSound.volume = 1
playBtn.addEventListener('click', function () {
  if (wheelSound.paused) {
    wheelSound.play()
  } else {
    wheelSound.pause()
  }
})
// let slice26 = {
//   min: 0,
//   max: 9.72,
//   value: 26
// }
// let slice3 = {
//   min: 9.72,
//   max: 19.44,
//   value: 3
// }
// let slice35 = {
//   min: 19.44,
//   max: 29.16,
//   value: 35
// }
// let slice12 = {
//   min: 29.16,
//   max: 38.88,
//   value: 12
// }

// let slice28 = {
//   min: 38.88,
//   max: 48.6,
//   value: 28
// }
// let slice7 = {
//   min: 48.6,
//   max: 58.32,
//   value: 7
// }
// let slice29 = {
//   min: 58.32,
//   max: 68.04,
//   value: 29
// }
// let slice18 = {
//   min: 68.04,
//   max: 77.76,
//   value: 18
// }
// let slice22 = {
//   min: 77.76,
//   max: 87.48,
//   value: 22
// }
// let slice9 = {
//   min: 87.48,
//   max: 97.2,
//   value: 9
// }
// let slice31 = {
//   min: 97.2,
//   max: 106.92,
//   value: 31
// }
// let slice14 = {
//   min: 106.92,
//   max: 116.64,
//   value: 14
// }

// let slice20 = {
//   min: 116.64,
//   max: 126.36,
//   value: 20
// }
// let slice1 = {
//   min: 126.36,
//   max: 136.08,
//   value: 1
// }
// let slice33 = {
//   min: 136.08,
//   max: 145.8,
//   value: 33
// }
// let slice16 = {
//   min: 145.8,
//   max: 155.52,
//   value: 16
// }
// let slice24 = {
//   min: 155.52,
//   max: 165.24,
//   value: 24
// }
// let slice5 = {
//   min: 165.24,
//   max: 174.96,
//   value: 5
// }
// let slice10 = {
//   min: 174.96,
//   max: 184.68,
//   value: 10
// }
// let slice23 = {
//   min: 184.68,
//   max: 194.4,
//   value: 23
// }
// let slice8 = {
//   min: 194.4,
//   max: 204.12,
//   value: 8
// }
// let slice30 = {
//   min: 204.12,
//   max: 213.84,
//   value: 30
// }
// let slice11 = {
//   min: 213.84,
//   max: 223.56,
//   value: 11
// }
// let slice36 = {
//   min: 223.56,
//   max: 233.28,
//   value: 36
// }
// let slice13 = {
//   min: 233.28,
//   max: 243,
//   value: 13
// }
// let slice27 = {
//   min: 243,
//   max: 252.72,
//   value: 27
// }
// let slice6 = {
//   min: 252.72,
//   max: 262.44,
//   value: 6
// }
// let slice34 = {
//   min: 262.44,
//   max: 272.16,
//   value: 34
// }
// let slice17 = {
//   min: 272.16,
//   max: 281.88,
//   value: 17
// }
// let slice25 = {
//   min: 281.88,
//   max: 291.6,
//   value: 25
// }
// let slice2 = {
//   min: 291.6,
//   max: 301.32,
//   value: 2
// }
// let slice21 = {
//   min: 301.32,
//   max: 311.04,
//   value: 21
// }
// let slice4 = {
//   min: 311.04,
//   max: 320.76,
//   value: 4
// }
// let slice19 = {
//   min: 320.76,
//   max: 330.48,
//   value: 19
// }
// let slice15 = {
//   min: 330.48,
//   max: 340.2,
//   value: 15
// }
// let slice32 = {
//   min: 340.2,
//   max: 349.92,
//   value: 35
// }
// let slice0 = {
//   min: 349.92,
//   max: 360,
//   value: 36
// }
let slice0 = {
  min: 0,
  max: 4.86,
  value: 0
}
let slice26 = {
  min: 4.85,
  max: 14.58,
  value: 26
}
let slice3 = {
  min: 14.58,
  max: 24.3,
  value: 3
}
let slice35 = {
  min: 24.3,
  max: 34.02,
  value: 35
}
let slice12 = {
  min: 34.02,
  max: 43.74,
  value: 12
}
let slice28 = {
  min: 43.74,
  max: 52.94,
  value: 28
}
let slice7 = {
  min: 52.94,
  max: 62.66,
  value: 7
}
let slice29 = {
  min: 62.66,
  max: 72.38,
  value: 29
}
let slice18 = {
  min: 72.38,
  max: 82.1,
  value: 18
}
let slice22 = {
  min: 82.1,
  max: 91.82,
  value: 22
}
let slice9 = {
  min: 91.82,
  max: 101.54,
  value: 9
}
let slice31 = {
  min: 101.54,
  max: 111.26,
  value: 31
}
let slice14 = {
  min: 111.26,
  max: 120.98,
  value: 14
}
let slice20 = {
  min: 120.98,
  max: 130.7,
  value: 20
}
let slice1 = {
  min: 130.7,
  max: 140.42,
  value: 1
}
let slice33 = {
  min: 140.42,
  max: 150.14,
  value: 33
}
let slice16 = {
  min: 150.14,
  max: 159.86,
  value: 16
}
let slice24 = {
  min: 159.86,
  max: 169.58,
  value: 24
}
let slice5 = {
  min: 169.58,
  max: 179.3,
  value: 5
}
let slice10 = {
  min: 179.3,
  max: 189.02,
  value: 10
}
let slice23 = {
  min: 189.02,
  max: 198.74,
  value: 23
}
let slice8 = {
  min: 198.74,
  max: 208.46,
  value: 8
}
let slice30 = {
  min: 208.46,
  max: 218.18,
  value: 30
}
let slice11 = {
  min: 218.18,
  max: 227.9,
  value: 11
}
let slice36 = {
  min: 227.9,
  max: 237.62,
  value: 36
}
let slice13 = {
  min: 237.62,
  max: 247.34,
  value: 13
}
let slice27 = {
  min: 247.34,
  max: 257.06,
  value: 27
}
let slice6 = {
  min: 257.06,
  max: 266.78,
  value: 6
}
let slice34 = {
  min: 266.78,
  max: 276.5,
  value: 34
}
let slice17 = {
  min: 276.5,
  max: 286.22,
  value: 17
}
let slice25 = {
  min: 286.22,
  max: 295.94,
  value: 25
}
let slice2 = {
  min: 295.94,
  max: 305.66,
  value: 2
}
let slice21 = {
  min: 305.66,
  max: 315.38,
  value: 21
}

let slice4 = {
  min: 315.38,
  max: 325.1,
  value: 4
}
let slice19 = {
  min: 325.1,
  max: 334.82,
  value: 19
}
let slice15 = {
  min: 334.82,
  max: 344.54,
  value: 15
}
let slice32 = {
  min: 344.54,
  max: 354.26,
  value: 32
}

const sliceArr = [
  slice0,
  slice26,
  slice3,
  slice35,
  slice12,
  slice28,
  slice7,
  slice29,
  slice18,
  slice22,
  slice9,
  slice31,
  slice14,
  slice20,
  slice1,
  slice33,
  slice16,
  slice24,
  slice5,
  slice10,
  slice23,
  slice8,
  slice30,
  slice11,
  slice36,
  slice13,
  slice27,
  slice6,
  slice34,
  slice17,
  slice25,
  slice2,
  slice21,
  slice4,
  slice19,
  slice15,
  slice32
]
function spinResult() {
  sliceArr.forEach((slice) => {
    if (actualDeg >= 354.26 && actualDeg <= 360) {
      actualNumber = 0
      return
    }
    if (actualDeg > slice.min && actualDeg < slice.max) {
      console.log('slice', slice.value)
      actualNumber = slice.value
      console.log('this is the result', actualNumber, slice.value)
    }
  })
}

// reset all arrays
const resetAllArrays = () => {
  for (let i = 0; i < columnOptions.length; i++) {
    columnOptions[i] = 0
  }
  for (let i = 0; i < rowOptions.length; i++) {
    rowOptions[i] = 0
  }
  for (let i = 0; i < halfOptions.length; i++) {
    halfOptions[i] = 0
  }
  for (let i = 0; i < evenOptions.length; i++) {
    evenOptions[i] = 0
  }
  for (let i = 0; i < colorOptions.length; i++) {
    colorOptions[i] = 0
  }
  for (let i = 0; i < numberOptions.length; i++) {
    numberOptions[i] = 0
  }
}

// const changeNumber = () => {
//   const changedNumber = spinResult
//   setTimeout(() => {
//     spin()
//   }, 50)
// }

// const playGame = () => {
//   const playTime = setInterval(changeNumber, 500)
//   gameIsOn = true
//   resetBetButton.style.display = 'none'
//   setTimeout(() => {
//     clearInterval(playTime)
//     spinResult()
//     alreadyPlayed = true
//     checkWin()
//     gameIsOn = false
//     actualBet = 0
//   }, 12000)
// }

// check win
function checkWin() {
  checkNumberWin()
  checkColumnWin()
  checkRowWin()
  checkHalfWin()
  checkEvenWin()
  checkColorWin()
  setTimeout(() => {
    document.querySelectorAll('.number-bet').forEach((chip) => chip.remove())
    displayLastNumbers()
  }, 1000)
}

// const arrFunction = []
// arrFunction.push(checkColorWin)
// arrFunction.push(checkColumnWin)
// arrFunction.push(checkRowWin)
// arrFunction.push(checkHalfWin)
// arrFunction.push(checkEvenWin)
// arrFunction.push(checkColorWin)

// arrFunction.forEach((win) => {
//   totalWin = win + win
// })

// const displayWin = (win) => {
//   money = money + win - actualBet
//   moneyDisplay.innerHTML = `${money}`
// }

function checkNumberWin() {
  console.log('check num win')
  if (numberOptions[actualNumber] !== 0) {
    winNumber = numberOptions[actualNumber] * 36
    // displayWin(winNumber)
    if ((winNumber = numberOptions[actualNumber] * 36)) {
      money = moneyBeforePlay + betSize + 35
    } else {
      money = moneyBeforePlay - actualBet
    }
    moneyDisplay.innerHTML = `${money}`
  }
  for (let i = 0; i < numberOptions.length; i++) {
    numberOptions[i] = 0
  }
}

let actualColumn = null
let actualRow = null
let actualHalf = null
let actualEven = null
let actualColor = null

function setOptions() {
  if (actualNumber !== 0 && actualNumber <= 12) {
    actualRow = 0
  } else if (actualNumber !== 0 && actualNumber > 12 && actualNumber <= 24) {
    actualRow = 1
  } else if (actualNumber !== 0 && actualNumber > 24 && actualNumber <= 36) {
    actualRow = 2
  }

  if (actualNumber !== 0 && actualNumber < 19) {
    actualHalf = 0
  } else if (actualNumber !== 0 && actualNumber > 18) {
    actualHalf = 1
  }

  const modulo = actualNumber % 2
  if (actualNumber !== 0 && modulo === 0) {
    actualEven = 0
  } else if (actualNumber !== 0 && modulo === 1) {
    actualEven = 1
  }

  switch (actualNumber) {
    case 0:
      actualColor = 69
      break
    case 1:
      actualColumn = 2
      actualColor = 0
      break
    case 2:
      actualColumn = 1
      actualColor = 1
      break
    case 3:
      actualColumn = 0
      actualColor = 0
      break
    case 4:
      actualColumn = 2
      actualColor = 1
      break
    case 5:
      actualColumn = 1
      actualColor = 0
      break
    case 6:
      actualColumn = 0
      actualColor = 1
      break
    case 7:
      actualColumn = 2
      actualColor = 0
      break
    case 8:
      actualColumn = 1
      actualColor = 1
      break
    case 9:
      actualColumn = 0
      actualColor = 0
      break
    case 10:
      actualColumn = 2
      actualColor = 1
      break
    case 11:
      actualColumn = 1
      actualColor = 1
      break
    case 12:
      actualColumn = 0
      actualColor = 0
      break
    case 13:
      actualColumn = 2
      actualColor = 1
      break
    case 14:
      actualColumn = 1
      actualColor = 0
      break
    case 15:
      actualColumn = 0
      actualColor = 1
      break
    case 16:
      actualColumn = 2
      actualColor = 0
      break
    case 17:
      actualColumn = 1
      actualColor = 1
      break
    case 18:
      actualColumn = 0
      actualColor = 0
      break
    case 19:
      actualColumn = 2
      actualColor = 0
      break
    case 20:
      actualColumn = 1
      actualColor = 1
      break
    case 21:
      actualColumn = 0
      actualColor = 0
      break
    case 22:
      actualColumn = 2
      actualColor = 1
      break
    case 23:
      actualColumn = 1
      actualColor = 0
      break
    case 24:
      actualColumn = 0
      actualColor = 1
      break
    case 25:
      actualColumn = 2
      actualColor = 0
      break
    case 26:
      actualColumn = 1
      actualColor = 1
      break
    case 27:
      actualColumn = 0
      actualColor = 0
      break
    case 28:
      actualColumn = 2
      actualColor = 1
      break
    case 29:
      actualColumn = 1
      actualColor = 1
      break
    case 30:
      actualColumn = 0
      actualColor = 0
      break
    case 31:
      actualColumn = 2
      actualColor = 1
      break
    case 32:
      actualColumn = 1
      actualColor = 0
      break
    case 33:
      actualColumn = 0
      actualColor = 1
      break
    case 34:
      actualColumn = 2
      actualColor = 0
      break
    case 35:
      actualColumn = 1
      actualColor = 1
      break
    case 36:
      actualColumn = 0
      actualColor = 0
      break
  }
}
function checkColumnWin() {
  setOptions()
  console.log('check column win')
  if (columnOptions[actualColumn] !== 0) {
    winNumber = columnOptions[actualColumn] * 3
    setTimeout(() => {
      // displayWin(winNumber)
      if ((winNumber = columnOptions[actualColumn] * 3)) {
        money = moneyBeforePlay + betSize + 2
      } else {
        money = moneyBeforePlay - actualBet
      }
      moneyDisplay.innerHTML = `${money}`
    }, 10)
  }
  for (let i = 0; i < columnOptions.length; i++) {
    columnOptions[i] = 0
  }
}

function checkRowWin() {
  setOptions()
  console.log('check row win')
  if (rowOptions[actualRow] !== 0) {
    winNumber = rowOptions[actualRow] * 3
    setTimeout(() => {
      // displayWin(winNumber)
      if ((winNumber = rowOptions[actualRow] * 3)) {
        money = moneyBeforePlay + betSize + 2
      } else {
        money = moneyBeforePlay - actualBet
      }
      moneyDisplay.innerHTML = `${money}`
    }, 20)
  }
  for (let i = 0; i < rowOptions.length; i++) {
    rowOptions[i] = 0
  }
}

function checkHalfWin() {
  setOptions()
  console.log('check half win')
  if (halfOptions[actualHalf] !== 0) {
    winNumber = halfOptions[actualHalf] * 2
    setTimeout(() => {
      // displayWin(winNumber)
      if ((winNumber = halfOptions[actualHalf] * 2)) {
        money = moneyBeforePlay + betSize + 1
      } else {
        money = moneyBeforePlay - actualBet
      }
      moneyDisplay.innerHTML = `${money}`
    }, 30)
  }
  for (let i = 0; i < halfOptions.length; i++) {
    halfOptions[i] = 0
  }
}

function checkEvenWin() {
  setOptions()
  console.log('check Even win')
  if (evenOptions[actualEven] !== 0) {
    winNumber = evenOptions[actualEven] * 2
    setTimeout(() => {
      // displayWin(winNumber)
      if ((winNumber = evenOptions[actualEven] * 2)) {
        money = moneyBeforePlay + betSize + 1
      } else {
        money = moneyBeforePlay - actualBet
      }
      moneyDisplay.innerHTML = `${money}`
    }, 40)
  }
  for (let i = 0; i < evenOptions.length; i++) {
    evenOptions[i] = 0
  }
}

function checkColorWin() {
  setOptions()
  console.log('check Color win')
  if (colorOptions[actualColor] !== 0) {
    winNumber = colorOptions[actualColor] * 2
    console.log(winNumber)
    setTimeout(() => {
      // displayWin(winNumber)
      if ((winNumber = colorOptions[actualColor] * 2)) {
        money = moneyBeforePlay + betSize + 1
      } else {
        money = moneyBeforePlay - actualBet
      }
      moneyDisplay.innerHTML = `${money}`
    }, 50)
  }
  for (let i = 0; i < colorOptions.length; i++) {
    colorOptions[i] = 0
  }
}

// last numbers
const lastNumbers = []

const last0 = document.getElementById('ln0')
const last1 = document.getElementById('ln1')
const last2 = document.getElementById('ln2')
const last3 = document.getElementById('ln3')
const last4 = document.getElementById('ln4')
const last5 = document.getElementById('ln5')
const last6 = document.getElementById('ln6')
const last7 = document.getElementById('ln7')
const last8 = document.getElementById('ln8')
const last9 = document.getElementById('ln9')

const lastNumbersSetters = [
  last0,
  last1,
  last2,
  last3,
  last4,
  last5,
  last6,
  last7,
  last8,
  last9
]
const lastNumberColors = []

const displayLastNumbers = () => {
  lastNumbers.push(actualNumber)
  if (lastNumbers.length > 10) {
    lastNumbers.pop()
    lastNumberColors.pop()
  }
  for (let i = 0; i < lastNumbers.length; i++) {
    lastNumbersSetters[i].innerHTML = lastNumbers[i]
  }
  if (actualColor === 0) {
    lastNumberColors.unshift('red')
  } else if (actualColor === 1) {
    lastNumberColors.unshift('black')
  } else {
    lastNumberColors.unshift('green')
  }
  for (let i = 0; i < lastNumberColors.length; i++) {
    lastNumbersSetters[i].style.color = lastNumberColors[i]
  }
}

//switch mode

const switchMode = document.querySelector('#switchMode')
const table = document.querySelector('table')

let day = false
switchMode.addEventListener('click', function () {
  if (day === false) {
    table.style.backgroundColor = 'rgb(95, 8, 8)'
    switchMode.style.backgroundColor = 'rgb(95, 8, 8)'
    switchMode.innerHTML = 'NIGHT MODE'
    day = true
  } else {
    table.style.backgroundColor = 'rgb(7, 94, 43)'
    switchMode.style.backgroundColor = 'rgb(7, 94, 43)'
    switchMode.innerHTML = 'DAY MODE'
    day = false
  }
})
