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

function identificaVogalEConsoante () {
    /**
     * @type {string}
     */
    let letra;

    letra = prompt("Digite uma letra para vermos se ela é vogal ou consoante:")
    letra = letra.toLowerCase();
    
    if (letra=="a") {
        alert("Isso é uma vogal")
    } 
    
    else if(letra=="e"){
        alert("Isso é uma vogal")

    } 

    else if(letra=="i"){
        alert("Isso é uma vogal")

    } 

    else if(letra=="o"){
        alert("Isso é uma vogal")

    } 
        
    else if(letra=="u"){
        alert("Isso é uma vogal")
        
    }

    else{
        alert("Isso é uma consoante!")
    }
   
}

function mostraPreço () {
    let escolha;

    alert("[1] Chocolate")
    alert("[2] Morango")
    alert("[3] Creme")
    alert("[4] Manga")
    alert("[5] Melancia")
    alert("[6] Vanilla Ice")
    alert("[7] Céu Azul")
    alert("[8] Brownie")
    alert("[9] Hawaiano")
    
   escolha = parseInt(prompt("Digite o número do sabor que você gostaria de ver o preço:"));

    switch (escolha) {
        case 1:
            alert("O picolé de chocolate custa R$1,50!");
            break;

        case 2:
            alert("O picolé de morango custa R$2,50!");
            break;
        
        case 3:
            alert("O picolé de creme custa R$2,50!");
            break;

        case 4:
            alert("O picolé de manga custa R$3,50!");
            break;
        
        case 5:
            alert("O picolé de melancia custa R$3,40!");
            break;

        case 6:
            alert("O picolé de Vanilla Ice custa R$3,00!");
            break;

        case 7:
            alert("O picolé de Céu Azul custa R$3,60!");
            break;

        case 8:
            alert("O picolé de brownie custa R$4,00!");
            break;

        case 9:
            alert("O picolé de hawaiano custa R$5,00");
            break;

        default:
            alert("Esse sabor não existe, tente novamente.");

    }

}
