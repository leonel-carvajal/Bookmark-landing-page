const ham = document.getElementById('ham')
const modal = document.getElementById('modal')
const close = document.getElementById('close')
const question = document.querySelectorAll('.question')
const taboption = document.querySelectorAll('.tab__options__item')
const tab = document.getElementsByClassName('tab__content')
const submit = document.getElementById('submit')
Array.from(tab)
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
const tabFunc = (id) => {
  for (let i = 0; i < tab.length; i++){
    tab[i].style.display='none'
  }
  document.getElementById(id).style.display = 'block'
  document.getElementById(id).style.display = 'grid'
}
taboption.forEach(tabEle => {
  tabEle.addEventListener('click', () => {
    tabFunc(tabEle.dataset.tab)
  })
})


const comenzar = () => {
  const email = document.getElementById('email')
  document.datos.addEventListener('invalid', validar, true)
  document.datos.addEventListener('input', validar_real, true)
  email.addEventListener('input', validar)
  validar()
}
const validateEmail = (email) => {
  const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (emailRegex.test(email)) console.log('email válido')
  else console.log('email incorrecto')
}
const validar = () => {
  if (email.value === ''|| validateEmail(email.value)) {
    email.setCustomValidity(`Fild can't be empty,please enter a valid email`)
    
  } else {
    email.setCustomValidity("")
  }
}
const validar_real = (e) => {
  let elemento = e.target
  if (elemento.validity.valid) {
    elemento.classList.add('error')
  } else {
    elemento.classList.remove('error')
  }
}
submit.addEventListener('submit', comenzar)
window.addEventListener('DOMContentLoaded', comenzar)