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
