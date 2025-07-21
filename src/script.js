let btn = document.getElementById("calcular");
let anoNascimento = document.getElementById("ano");
let resposta = document.getElementById("resposta");
let anoAtual = new Date().getFullYear();
let idade = 0;

function calcularIdade(anoNascimento){
    anoNascimento = Number(anoNascimento.value)
    if(anoNascimento === 0 ||isNaN(anoNascimento) || anoNascimento > anoAtual || anoNascimento < 1900){
        resposta.textContent = "Por favor, insira um ano válido.";
    }
    else{
        idade = anoAtual-anoNascimento
        resposta.textContent = "Você tem " + idade + " anos.";
    }
}
btn.addEventListener("click",function(){
    calcularIdade(anoNascimento)
})

