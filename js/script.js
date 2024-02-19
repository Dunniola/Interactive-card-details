const nameInput = document.getElementById("NameInput").addEventListener("keyup", setcardName);
const numberInput = document.getElementById('NumberInput').addEventListener('keyup', setcardNumber)
const month = document.getElementById('month').addEventListener('keyup', setexpMonth)
const year = document.getElementById('year').addEventListener('keyup', setexpYear) 
const cvv = document.getElementById('cvv').addEventListener('keyup', setCvv)
const errorMessage = document.querySelectorAll('.errorMessage')
const button = document.getElementById('continueButton').addEventListener('click', display)
const aside = document.querySelector('aside')
const thankYou = document.querySelector('.thankYou')

const form = document.querySelector('form').addEventListener('submit', handleSubmit)

    function handleSubmit (e) {
        e.preventDefault();
    const numValue = document.getElementById('NumberInput').value
    const monthValue = document.getElementById('month').value
    const yearValue = document.getElementById('year').value
    const cvv = document.getElementById('cvv').value
    const input = document.querySelectorAll('input')

    if(/[a-zA-Z]/.test(numValue)){
        errorMessage[1].innerHTML = 'Wrong format, numbers only';
        input[1].style.border = '1px solid red';
    } else {
        errorMessage[1].innerHTML = '';
        input[1].style.border =''
    }
    if(monthValue === ''){
        errorMessage[2].innerHTML = "Can't be blank"
        input[2].style.border = '1px solid red';
    }else{
        errorMessage[2].innerHTML = ''
        input[2].style.border = '';
    }
    if(yearValue === ''){
        errorMessage[2].innerHTML = "Can't be blank"
        input[3].style.border = '1px solid red';
    }else{
        errorMessage[2].innerHTML = ''
        input[3].style.border = '';
    }
    if(cvv === ''){
        errorMessage[3].innerHTML = "Can't be blank"
        input[4].style.border = '1px solid red';
    }else{
        errorMessage[3].innerHTML = ""
        input[4].style.border = '';
    }
    if(numValue && monthValue && yearValue && cvv){
       thankYou.style.display = 'block' 
       aside.style.display = 'none'
    
    }else{
        
    }

}

function setcardName(e){
    document.querySelector('.cardName').textContent = e.target.value
}
function setcardNumber(e){
    document.querySelector('.cardNumber').textContent = format(e.target.value)
}
function format (s){
    return s.toString().replace (/\d{4}(?=.)/g, "$& ")
}
function setexpMonth (e){
    document.querySelector('.cardMonth').textContent = e.target.value
}
function setexpYear (e){
    document.querySelector('.cardYear').textContent = e.target.value
}
function setCvv (e){
    document.querySelector('.cardCvv').textContent = e.target.value
}
function display (){
thankYou.style.display = 'none'
aside.style.display = 'block'
}
const input = document.querySelectorAll('input')
input.forEach(function(input) {
    input.addEventListener('click', function () {

            this.style.outline = 'none'
        
});


});



