let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function cliqueConsole() {
  console.log('O botão foi clicado');
}

function cliqueAlerta() {
  alert('Eu amo JS');
}

function cliquePrompt() {
  let cidade = prompt('Digite o nome de uma cidade no Brasil');
  alert(`Estive em ${cidade} e lembrei de você`);
}

function cliqueSoma() {
  let valor1 = parseInt(prompt('Digito o primeiro número'));
  let valor2 = parseInt(prompt('Digito o segundo número'));
  let soma = valor1 + valor2;
  alert(` A soma de ${valor1} + ${valor2} é = ${soma}`);
}
