/*
  O script abaixo foi feito apenas para contexto de
  explicação do LocalStorage, e não faz parte do projeto.
*/

function example() {
  localStorage.setItem("chaveExemplo1", "valorExemplo1");
  localStorage.setItem("chaveExemplo2", "valorExemplo2");
  localStorage.setItem("chaveExemplo3", "valorExemplo3");
  const capturedFromLS = localStorage.getItem("chaveExemplo");
  console.log(capturedFromLS);

  // localStorage.removeItem("chaveExemplo");
  localStorage.clear();
}

example();
