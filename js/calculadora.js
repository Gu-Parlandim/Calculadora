var resultado = document.querySelector(".resultado label")


function buttonC(){
    resultado.innerHTML = ""
}

function backSpace(){
    const resultado = document.querySelector(".resultado label").innerHTML;
    document.querySelector(".resultado label").innerHTML = resultado.substring(0, resultado.length -1)
}

function buttonIgual(){
    /* const resultadoFim = eval(contaResultado) */
    resultado.innerHTML = eval(resultado.innerHTML)
    /* console.log(resultado)
    contaResultado = resultadoFim */
}

function operation(valor){
    let verificar = "valido"
    if(valor == "+" || valor == "-" || valor == "*" || valor == "/"){
        if(resultado.innerHTML[resultado.innerHTML.length -1] == "+" || resultado.innerHTML[resultado.innerHTML.length -1] == "-" ||
        resultado.innerHTML[resultado.innerHTML.length -1] == "*" ||
        resultado.innerHTML[resultado.innerHTML.length -1] == "/"){
            alert("Operação invalida")
            verificar = "invalido"
        }
    }
    if(verificar == "valido"){
        resultado.innerHTML += valor
    }
}

/* function porcentagem(){
    if(resultado.innerHTML == ""){
        alert("selecione um número antes")
    }else{

        resultado.innerHTML += "%"
    }
} */

