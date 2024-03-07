const billInput = document.querySelector('.billInput')
const peopleInput = document.querySelector('.numOfPpl')
const total = document.getElementById("total")
const tipAmount = document.getElementById("tipAmount")
const five = document.getElementById("five")
const ten = document.getElementById("ten")
const fifteen = document.getElementById("fifteen")
const twentyfive = document.getElementById("twentyfive")
const fifty = document.getElementById("fifty")
const customInput = document.querySelector('.customInput')
const reset = document.querySelector('.resetBtn')
const error = document.querySelector('.error')

reset.addEventListener("click", function(){
  billInput.value = 0
  peopleInput.value = 0
  total.textContent = "$0.00"
  tipAmount.textContent = "$0.00"
  customInput.value = ""
  error.style.display = "none"
  peopleInput.style.border = ""
})

customInput.addEventListener("change", function(){
    let zero = ""
    if(peopleInput.value === zero){
        peopleInput.style.border = "1px solid red"
        error.style.display = "flex"
    }else{
        let percent = customInput.value
        tipAmount.textContent = "$" + (percent / 100) * billInput.value
        total.textContent = "$" + (percent / 100) * billInput.value * peopleInput.value
    }
})

five.addEventListener("click", function(){
    let zero = ""
    if(peopleInput.value === zero){
        peopleInput.style.border = "1px solid red"
        error.style.display = "flex"
    }else{
        let percent = 5
        tipAmount.textContent = "$" + (percent / 100) * billInput.value
        total.textContent = "$" + (percent / 100) * billInput.value * peopleInput.value
    }
})

ten.addEventListener("click", function(){
    let zero = ""
    if(peopleInput.value === zero){
        peopleInput.style.border = "1px solid red"
        error.style.display = "flex"
    }else{
        let percent = 10
        tipAmount.textContent = "$" + (percent / 100) * billInput.value
        total.textContent = "$" + (percent / 100) * billInput.value * peopleInput.value
    }
})

fifteen.addEventListener("click", function(){
    let zero = ""
    if(peopleInput.value === zero){
        peopleInput.style.border = "1px solid red"
        error.style.display = "flex"
    }else{
        let percent = 15
        tipAmount.textContent = "$" + (percent / 100) * billInput.value
        total.textContent = "$" + (percent / 100) * billInput.value * peopleInput.value
    }
})

twentyfive.addEventListener("click", function(){
    let zero = ""
    if(peopleInput.value === zero){
        peopleInput.style.border = "1px solid red"
        error.style.display = "flex"
    }else{
        let percent = 25
        tipAmount.textContent = "$" + (percent / 100) * billInput.value
        total.textContent = "$" + (percent / 100) * billInput.value * peopleInput.value
    }
})

fifty.addEventListener("click", function(){
    let zero = ""
    if(peopleInput.value === zero){
        peopleInput.style.border = "1px solid red"
        error.style.display = "flex"
    }else{
        let percent = 50
        tipAmount.textContent = "$" + (percent / 100) * billInput.value
        total.textContent = "$" + (percent / 100) * billInput.value * peopleInput.value
    }
})
