var minhaVariavel = false;

var intervalo = setInterval(function() {
  if (minhaVariavel === true) {
    clearInterval(intervalo);
    console.log("Intervalo interrompido!");
  } else {
    console.log("Executando o código a cada minuto...");
  }
}, 60000); // 60000 milissegundos = 1 minuto
