/*Ao clicar no botão "Calcular", o JavaScript deve:
Capturar os valores inseridos nos inputs (peso e altura).
Calcular o IMC usando a fórmula:
IMC = peso / (altura x altura).
Exibir o valor do IMC na tag <p> correspondente.

Revise o exemplo prático feito em aula para lembrar como capturar valores dos inputs e exibir resultados no HTML.
Lembre-se que o document.getElementById(“ID”) retorna o elemento completo e que você precisa usar o .value no final para obter os valores inseridos nos inputs.
Utilize parseFloat() ou Number() para converter os valores dos inputs em números.
Teste sua aplicação com diferentes valores para garantir que os cálculos estão corretos.

*/

function calcularIMC() {
    let pesoAtual = parseFloat(document.getElementById("peso").value);
    let alturaAtual = parseFloat(document.getElementById("altura").value);


    let imc = pesoAtual / (alturaAtual * alturaAtual);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    document.getElementById("valorIMC").textContent = "Seu IMC: " + imc.toFixed(2);
    document.getElementById("nivelIMC").textContent = "Classificação: " + classificacao;


}
