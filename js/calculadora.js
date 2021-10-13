var resultado = document.querySelector(".resultado label")
var contaResultado = ""

function buttonC(){
    resultado.innerHTML = ""
    contaResultado = ""
}

function buttonVol(){
    const resultado = document.querySelector(".resultado label").innerHTML;
    document.querySelector(".resultado label").innerHTML = resultado.substring(0, resultado.length -1)
}

function buttonIgual(){
    const resultadoFim = eval(contaResultado)
    resultado.innerHTML = resultadoFim
    console.log(resultado)
    contaResultado = resultadoFim
}

function button7(){
    resultado.innerHTML +="7"
    contaResultado += 7
}

function button8(){
    resultado.innerHTML +="8"
    contaResultado += 8
}

function button9(){
    resultado.innerHTML +="9"
    contaResultado += 9
}

function buttonMais(){
    resultado.innerHTML +="+"
    contaResultado+= "+"
}

function  button4(){
    resultado.innerHTML +="4"
    contaResultado += 4
}

function  button5(){
    resultado.innerHTML +="5"
    contaResultado += 5
}

function  button6(){
    resultado.innerHTML +="6"
    contaResultado += 6
}
function buttonMenos(){
    resultado.innerHTML +="-"
    contaResultado += "-"
}

function  button1(){
    resultado.innerHTML +="1"
    contaResultado += 1
}

function  button2(){
    resultado.innerHTML +="2"
    contaResultado += 2
}

function  button3(){
    resultado.innerHTML +="3"
    contaResultado += 3
}
function buttonX(){
    resultado.innerHTML +="*"
    contaResultado += "*"
}

function button0(){
    resultado.innerHTML +="0"
    contaResultado += 0
}
function buttonPonto(){
    resultado.innerHTML +="."
    contaResultado += "."
}
function buttonDividir(){
    resultado.innerHTML +="/"
    contaResultado += "/"
}

function porcentagem(){
    if(resultado.innerHTML == ""){
        alert("selecione um número antes")
    }else{
        resultado.innerHTML += "%"
        contaResultado = (contaResultado / 100) + "*"
        console.log(contaResultado)
    }
}

