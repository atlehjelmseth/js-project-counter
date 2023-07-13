// buttons and counter text
const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')

// initialize the count variable
let count = -65

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    const decButton = document.querySelector('.decrease')

    if (styles.contains('increase')) {
      count++

      if (decButton.disabled) decButton.disabled = false

      counter.classList.add('up')

      setTimeout(() => {
        counter.classList.remove('up')
      }, 500)
    } else if (styles.contains('decrease')) {
      count--

      if (count < -65) decButton.disabled = true

      counter.classList.add('down')

      setTimeout(() => {
        counter.classList.remove('down')
      }, 500)
    } else {
      if (decButton.disabled) decButton.disabled = false

      count = -65
    }

    if (count > 0)
      counter.style.color = 'darkgreen'

    if (count < 0)
      counter.style.color = 'red'

      if (count === 0)
      counter.style.color = 'lightgreen'

    if (count === -10 || count === -9 || count === -8 || count === -7 || count === -6 || count === -5 || count === -4 || count === -3 || count === -2 || count === -1)
      counter.style.color = 'orange'

    counter.textContent = count
  })
})

