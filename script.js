//spinning wheel

const playBtn = document.querySelector('#play')
const spin = () => {
  const wheel = document.querySelector('.wheel')
  let deg = 0

  playBtn.addEventListener('click', () => {
    playBtn.style.pointerEvents = 'none'
    deg = Math.floor(5000 + Math.random() * 5000)
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

//insert bet

const insertBet = (number) => {
  if ((betSize = 1)) {
    number.insertAdjacentHTML(
      'beforeend',
      "<div class='number-bet'><img src='https://i.ibb.co/ThQBv66/1.png' width='15px' height='15px'/></div>"
    )
  } else if ((betSize = 10)) {
    number.insertAdjacentHTML(
      'beforeend',
      "<div class='number-bet'><img src='https://i.ibb.co/K7khv0F/10.png' width='20px' height='20px'/></div>"
    )
  } else if ((betSize = 100)) {
    number.insertAdjacentHTML(
      'beforeend',
      "<div class='number-bet'><img src='https://i.ibb.co/kyDj7cG/100.png' width='20px' height='20px'/></div>"
    )
  } else if ((betSize = 500)) {
    number.insertAdjacentHTML(
      'beforeend',
      "<div class='number-bet'><img src='https://i.ibb.co/M59G0rv/500.png' width='20px' height='20px'/></div>"
    )
  }
}
