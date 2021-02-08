//spinning wheel

const playBtn = document.querySelector('#play')
const spin = () => {
  const wheel = document.querySelector('.wheel')
  let deg = 0

  playBtn.addEventListener('click', () => {
    playBtn.style.pointerEvents = 'none'
    deg = Math.floor(0 + Math.random() * 3700)
    wheel.style.transition = 'all 10s ease-out'
    wheel.style.transform = `rotate(${deg}deg)`
    wheel.classList.add('blur')
  })
  wheel.addEventListener('transitioned', () => {
    wheel.classList.remove('blur')
    playBtn.style.pointerEvents = 'auto'
    wheel.style.transition = 'none'
    const actualDeg = deg % 360
    wheel.style.transform = `rotate(${actualDeg}deg)`
  })
}
spin()

// Math.floor(actualDeg / 9.73) = actualNumber
// const wheel = {
//   object0: {
//     degree:[0..9.73]
//     value: 0,
//     color:'green'
//   },
//   object1: {
//     degree:[9.73..
//     value: 1,
//     color:'red'
//   }, object2: {
//     degree:
//     value: 2,
//     color:'black'
//   }, object3: {
//     degree:
//     value: 3,
//     color:'red'
//   }, object4: {
//     degree:
//     value: 4,
//     color:'black'
//   }, object5: {
//     degree:
//     value: 5,
//     color:'red'
//   }, object6: {
//     degree:
//     value: 6,
//     color:'black'
//   }, object7: {
//     degree:
//     value: 7,
//     color:'red'
//   }, object8: {
//     degree:
//     value: 8,
//     color:'black'
//   }, object9: {
//     degree:
//     value: 9,
//     color:'red'
//   }, object10: {
//     degree:
//     value: 10,
//     color:'black'
//   }, object11: {
//     degree:
//     value: 11,
//     color:'red'
//   }, object12: {
//     degree:
//     value: 12,
//     color:'black'
//   }, object13: {
//     degree:
//     value: 13,
//     color:'red'
//   }, object14: {
//     degree:
//     value: 14,
//     color:'black'
//   }, object15: {
//     degree:
//     value: 15,
//     color:'red'
//   }, object16: {
//     degree:
//     value: 16,
//     color:'black'
//   }, object17: {
//     degree:
//     value: 17,
//     color:'red'
//   }, object18: {
//     degree:
//     value: 18,
//     color:'black'
//   }, object19: {
//     degree:
//     value: 19,
//     color:'red'
//   }, object20: {
//     degree:
//     value: 20,
//     color:'black'
//   }, object21: {
//     degree:
//     value: 21,
//     color:'red'
//   }, object22: {
//     degree:
//     value: 22,
//     color:'black'
//   }, object23: {
//     degree:
//     value: 23,
//     color:'red'
//   }, object24: {
//     degree:
//     value: 24,
//     color:'black'
//   }, object25: {
//     degree:
//     value: 25,
//     color:'red'
//   }, object26: {
//     degree:
//     value: 26,
//     color:'black'
//   }, object27: {
//     degree:
//     value: 27,
//     color:'red'
//   }, object28: {
//     degree:
//     value: 28,
//     color:'black'
//   }, object29: {
//     degree:
//     value: 29,
//     color:'red'
//   }, object30: {
//     degree:
//     value: 30,
//     color:'black'
//   }, object31: {
//     degree:
//     value: 31,
//     color:'red'
//   }, object32: {
//     degree:
//     value: 32,
//     color:'black'
//   }, object33: {
//     degree:
//     value: 33,
//     color:'red'
//   }, object34: {
//     degree:
//     value: 34,
//     color:'black'
//   }, object35: {
//     degree:
//     value: 35,
//     color:'red'
//   }, object36: {
//     degree:
//     value: 36,
//     color:'black'
//   },

// }

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
    number.insertAdjacentHTML(
      'beforeend',
      "<div class='number-bet'><img src='https://i.ibb.co/ThQBv66/1.png' width='15px' height='15px'/></div>"
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
  document.querySelectorAll('.number-bet').forEach((e) => e.remove())
  money = money + actualBet
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
  rowOptions[number] = rowOptions[number] + betSize
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
  halfOptions[number] = halfOptions[number] + betSize
}

firstHalf.addEventListener('click', function () {
  if (checkMoney() && !gameIsOn) {
    insertBet(firstHalf)
    addToRowOptions(0)
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
    addToRowOptions(1)
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
  colorOptions[number] = colorOptions[number] + betSize
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

/* Reset all Arays when reset */
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



// check win
const checkNumberWin = () => {
  if (numberOptions[actualNumber] !== 0) {
    const winNumber = numberOptions[actualNumber] * 36
    displayWin(winNumber)
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

const setOptions = () => {
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
      actualColor = 0
      break
    case 12:
      actualColumn = 0
      actualColor = 1
      break
    case 13:
      actualColumn = 2
      actualColor = 0
      break
    case 14:
      actualColumn = 1
      actualColor = 1
      break
    case 15:
      actualColumn = 0
      actualColor = 0
      break
    case 16:
      actualColumn = 2
      actualColor = 1
      break
    case 17:
      actualColumn = 1
      actualColor = 0
      break
    case 18:
      actualColumn = 0
      actualColor = 1
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
      actualColor = 0
      break
    case 30:
      actualColumn = 0
      actualColor = 1
      break
    case 31:
      actualColumn = 2
      actualColor = 0
      break
    case 32:
      actualColumn = 1
      actualColor = 1
      break
    case 33:
      actualColumn = 0
      actualColor = 0
      break
    case 34:
      actualColumn = 2
      actualColor = 1
      break
    case 35:
      actualColumn = 1
      actualColor = 0
      break
    case 36:
      actualColumn = 0
      actualColor = 1
      break
  }
  if (actualNumber !== 0) {
    checkColumnWin()
    checkRowWin()
    checkHalfWin()
    checkEvenWin()
    checkColorWin()
  } else {
    resetAllArrays()
  }

  const checkColumnWin = () => {
    if (columnOptions[actualColumn] !== 0) {
      const winNumber = columnOptions[actualColumn] * 3
      setTimeout(() => {
        displayWin(winNumber)
      }, 10)
    }
    for (let i = 0; i < columnOptions.length; i++) {
      columnOptions[i] = 0
    }
  }
  
  const checkRowWin = () => {
    if (rowOptions[actualRow] !== 0) {
      const winNumber = rowOptions[actualRow] * 3
      setTimeout(() => {
        displayWin(winNumber)
      }, 20)
    }
    for (let i = 0; i < rowOptions.length; i++) {
      rowOptions[i] = 0
    }
  }
  
  const checkHalfWin = () => {
    if (halfOptions[actualHalf] !== 0) {
      const winNumber = halfOptions[actualHalf] * 2
      setTimeout(() => {
        displayWin(winNumber)
      }, 30)
    }
    for (let i = 0; i < halfOptions.length; i++) {
      halfOptions[i] = 0
    }
  }
  
  const checkEvenWin = () => {
    if (evenOptions[actualEven] !== 0) {
      const winNumber = evenOptions[actualEven] * 2
      setTimeout(() => {
        displayWin(winNumber)
      }, 40)
    }
    for (let i = 0; i < evenOptions.length; i++) {
      evenOptions[i] = 0
    }
  }
  
  const checkColorWin = () => {
    if (colorOptions[actualColor] !== 0) {
      const winNumber = colorOptions[actualColor] * 2
      setTimeout(() => {
        displayWin(winNumber)
      }, 50)
    }
    for (let i = 0; i < colorOptions.length; i++) {
      colorOptions[i] = 0
    }
  }
