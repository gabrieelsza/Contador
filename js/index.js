const mais = document.querySelector('.mais')
const menos = document.querySelector('.menos')
const resertar = document.querySelector('.resert')
const numero = document.querySelector('.value')

const updateValue = () => {
    numero.innerHTML = count; 
}

let count = 0; 
let intervalid = 0; 

mais.addEventListener('mousedown', () => {
    intervalid = setInterval(() => {
        count += 1; 
        updateValue(); 
    }, 100);
})


menos.addEventListener('mousedown', () => {
    intervalid = setInterval(() => {
        count -= 1; 
        updateValue(); 
    }, 100);
})

resertar.addEventListener('click', () => {
    count = 0; 
    updateValue();
})

document.addEventListener('mouseup', () => clearInterval(intervalid))