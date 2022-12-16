const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const count = document.getElementById('count')

let number = 0

minus.onclick = (e) =>{
    if (number > 0) {
        number--;
        count.innerText = number;
    }
}

plus.onclick = (e) =>{
    number++;
    count.innerText = number;
}


const posX = document.getElementById('posX')
const posY = document.getElementById('posY')

window.addEventListener("mousemove", e => {
    posX.innerHTML = e.screenX
    posY.innerHTML = e.screenY
})

const svetofor = prompt('Введите цвет светофора').toLocaleLowerCase().trim()
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

if (svetofor === 'красный') {
    alert('Stop');
    red.style.background = 'red'
} else if (svetofor === 'желтый') {
    alert('Wait');
    yellow.style.background = 'yellow';
}  else if (svetofor === 'зеленый') {
    alert('Go');
    green.style.background = 'green';
} else {
    alert('error')
}

