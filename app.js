alert ('Boas vindas ao jogo do número secreto');
numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo )+ 1 ;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Se o usuário pressionou o botão "Cancelar" ou for uma string vazia ou não for um número válido
    if (chute == null || chute.trim() === "" || isNaN(chute)) {
        alert("Por favor, digite um numero");
    } else if (chute == numeroSecreto) {
        break;
    } else if (chute > numeroSecreto) {
        alert(`O numero secreto é menor que ${chute}`);
    } else if (chute < numeroSecreto) {
        alert(`O numero secreto é maior que ${chute}`);
    }

    // Incrementa as tentativas apenas se o chute for válido
    tentativas++;
}
// variavel palavraTentativa é igual a: se tentativas for maior que 1 "tentativas" se não "tentativa"
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
 alert(`Isso ai! Você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa} `);

 // if (tentativas > 1){
//    alert(`Isso ai! Você acertou o número secreto (${numeroSecreto}) com ${tentativas} tentativas `);
//   } else{
//       alert(`Isso ai! Você acertou o número secreto (${numeroSecreto}) com ${tentativas} tentativa `); 
//   }