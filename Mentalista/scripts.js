var numeroSecreto = parseInt(Math.random() * 101);
console.log(numeroSecreto);

var contador = 0;

function Chutar() {
    let chute = document.getElementById('chuteUsuario');
    var valorChute = chute.value;

    if (valorChute == numeroSecreto) {
        alert('Acertou');
    }

    let numTentativas = "teste" + 1;
        elementoTentativas.innerHTML = numTentativas;

    while (valorChute != numeroSecreto) {

        contador = contador + 1;
        console.log(contador);
        
        if (valorChute > numeroSecreto) {
            alert('Errou... o número é menor');
        } else if (valorChute < numeroSecreto) {
            alert('Errou... o número é maior');
        } break
    }
}