//API - Application Program Interface
// importacao do express e atribuicao em uma constante chamada express.
const express = require('express');
const crypto = require ('crypto');
const cors = require ('cors');

// inicializacao do express na constante app.
const app = express();

// Estamos dizendo ao Express para usar o modulo json.
app.use(express.json());

//uso o middleware para remover o problema de cors
app.use(cors());

//Criar uma lista de tarefas pré cadastradas

const tarefas = [
    {
        id: crypto.randomUUID(),
        text: 'Ir ao mercado',
        prazo: '2 dias'
    },
    {
        id: crypto.randomUUID(),
        text: 'Estudar sobre git',
        prazo: '3 dias'
    },
    {
        id: crypto.randomUUID(),
        text: 'Estudar Javascript',
        prazo: '10 dias'
    },
]

// REST - POST / GET / PUT / DELETE
//CRUD - CREATE / READ / UPDATE / DELETE
//Rota raiz     *'=>' função de call back
app.get ('/', (req, res) => {
    console.log(req)

    res.send('Olá Galera!');
})

//Rota que lista todas as tarefas pré cadastradas
app.get ('/tarefas', (req, res) => {
    res.send (tarefas);
})

//Rota que busca por uma tarefa específica
app.get ('/tarefas/:id', (req, res) => {
    //acessar o parametro da URL
    const idParam = req.params.id;
   
    //buscar o item na lista de acordo com seu ID
    //como sabemos q a função retornará true, removemos as {} e o 'return true' (chama-se code smell)
    const tarefa = tarefas.find ((tarefa) => tarefa.id == idParam);

    res.send(tarefa);

})

//defino uma porta de rede para rodar o meu servidor web
const port = 3000;
app.listen(port, (req, res) => {
    console.log ('O app está rodando na porta 3000')
})


