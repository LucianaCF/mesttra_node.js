 const listaTarefasHtml = document.getElementById('tarefas');
 console.log (listaTarefasHtml);

// //FETCH API - usado para trabalhar com requisições http javascript (GET/POST/PUT/DELETE)
// //aceita dois parâmetros:
// //1o param. - End point da requisição (para onde iremos enviar a nossa requisição do front)
// //(https:localhost:3000/tarefas)
// //2o param. (opcional - não vamos utilizá-lo por enquanto) - configurações da requisição. Ex: Método 
// //(GET/POST/PUT/DELETE)

// //fetch('', {}) //>>>> as aspas são o 1o param e as chaves o 2o param


// //o fetch tem função assíncrona (promisse)

const chamadaApi = fetch('http://localhost:3000/tarefas');  //promisse
console.log(chamadaApi);

chamadaApi.then ((response) => {   //response
      console.log (response);
      return response.json()
  }).then((tarefas) => {           //entrega do pedido/promessa
      console.log (tarefas);
      tarefas.map ((tarefa) => {
         console.log(tarefa);
         listaTarefasHtml.insertAdjacentHTML('beforeend', `<li> 
         <p>Tarefa: ${tarefa.text}</p>
         <p>Prazo: ${tarefa.prazo}</p>      
         </li>`)         //inclui o elemento html numa posição definida na tag <ul>
//                         //dentro do ${} estamos fazendo interpolação para colocar dados
      })
  })