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
