const listaTarefasHtml = document.getElementById('pokemons');

//função q cuida só da chamada da API
const getPokemons = () => {
    const Api = fetch('https://pokeapi.co/api/v2/pokemon?limit=500');  //promisse
    Api.then ((response) => {   //response
          console.log (response);
          return response.json()
      }).then((data) => {           //entrega do pedido/promessa
          render (data.results);
         
    })
}
     
//função q cuida só da renderização
const render = (pokemons) => {
    pokemons.map ((pokemon, index) => {
            
        listaTarefasHtml.insertAdjacentHTML('beforeend', 
        `<li class="pokemon-card"> 
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${index + 1}.gif"/>
           <h3>${pokemon.name}</h3>    
        </li>`)
    })
}

getPokemons();

//console.log (listaTarefasHtml);

