const ham = document.getElementById('ham')
const modal = document.getElementById('modal')
const close = document.getElementById('close')
ham.addEventListener('click', () => {
  modal.classList.add('show')
})
close.addEventListener('click', () => {
  modal.classList.remove('show')
})
