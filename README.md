# setinterval-javascript-com-clear-para-parar-o-codigo
Este código cria uma variável chamada "minhaVariavel" que é inicializada como falsa (false).<br>
Em seguida, ele cria um intervalo de tempo que executa a função fornecida a cada minuto <br>
(ou 60.000 milissegundos). Dentro da função, ele verifica se a variável "minhaVariavel" é verdadeira (true).<br>
Se for verdadeira, ele interrompe o intervalo de tempo usando a função "clearInterval"<br>
e exibe uma mensagem informando que o intervalo foi interrompido. <br>
Caso contrário, ele exibe uma mensagem informando que o código está sendo executado a cada minuto.<br><br>

```
var minhaVariavel = false;

var intervalo = setInterval(function() {
  if (minhaVariavel === true) {
    clearInterval(intervalo);
    console.log("Intervalo interrompido!");
  } else {
    console.log("Executando o código a cada minuto...");
  }
}, 60000); // 60000 milissegundos = 1 minuto

```
