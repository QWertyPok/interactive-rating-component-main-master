const first = document.querySelector('.first')
const second = document.querySelector('.second')
const score = document.querySelector('.score') 
document.querySelector('.Submit').addEventListener('click', Submit)

const buttons = document.querySelectorAll('.num')

buttons.forEach(button => button.addEventListener('click', handleClick))

function handleClick(event) {
  buttons.forEach(el=> el.classList.remove('active'))
  event.target.classList.add('active')  
}
function Submit(){
first.style.display = 'none'
    second.style.display = 'block'
    score.innerHTML = `You selected ${document.querySelector('.active').id} out of 5 `
}

 