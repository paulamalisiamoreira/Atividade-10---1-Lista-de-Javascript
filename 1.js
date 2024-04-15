function somarNumero() {
    let continuar = true;
    let soma = 0;
    let numero;

    alert("Vamos fazer uma soma, digite seus números:");

    while (continuar) {
        numero = parseInt(prompt("Digite um número:"));

        if (!isNaN(numero)) {
            soma += numero;

        } else {
            alert("Você digitou algo inválido, tente novamente.");
        }

        continuar = confirm("Você deseja continuar?");

    }

    alert("O valor da soma é:" + soma);

}

function contagemRegressiva() {
    let i;

    for (i = 10; i > 0; i--) {
        alert("Faltam: " + i + " segundos!");

    }

    alert("O foguete foi lançado!");

}

function balançoFinanceiro() {
    let i;
    let lucro = 0;
    let prejuizo = 0;
    let situacaoFinal = 0;

    for (i=1; i < 12; i++) {
        lucro += parseFloat(prompt("Digite o valor total de entradas do mês " + i));

        prejuizo += parseFloat(prompt("Digite o valor total de saídas do mês " + i));

    }

    situacaoFinal = lucro - prejuizo;

    if (situacaoFinal > 0) {
        alert("Sua empresa ficou com um lucro de R$" + situacaoFinal)
    }

    if (situacaoFinal < 0 ) {
        alert("Sua empresa ficou com um prejuízo de R$" + situacaoFinal)
    } else {
        alert("Sua empresa gastou a mesma quantidade que ganhou!")
    }
}

function numerosDecrescente() {
    let array = [];
    let i;

    for (i = 0; i < 4 ; i++) {
        array[i] = parseInt(prompt());
    }

    array.sort((a,b) => b - a);

    alert(array);

}

function transformaPar() {
    let numero;
 
    numero = parseInt(prompt("Digite um número:"));

    if (numero%2 != 0) {
        numero = numero + 1;
    } 

    if (numero%2 == 0) {
        numero = numero + 1;
    } 
    
    alert("O número tornou-se " + numero);

}


