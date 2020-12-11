const ham = document.getElementById('ham')
const modal = document.getElementById('modal')
const close = document.getElementById('close')
const question = document.querySelectorAll('.question')
ham.addEventListener('click', () => {
  modal.classList.add('show')
})
close.addEventListener('click', () => {
  modal.classList.remove('show')
})
let arrowup = 'icon-arrow-up.svg';
let arrowdown = 'icon-arrow.svg';
question.forEach(el => {
  el.addEventListener('click', (e) => {
    el.nextElementSibling.classList.toggle('show-p')
    el.classList.toggle('arrow')
  })
})