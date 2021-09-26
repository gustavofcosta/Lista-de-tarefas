//Selecionando os elementos do HTML
const inputTarefa = document.querySelector('.input-tarefa'); 
const btnAdicionar = document.querySelector('.adicionar'); 
const tarefas = document.querySelector('.tarefas'); 

//Criando uma função para criar os elementos <li>
function criaLi() {
    const li = document.createElement('li');
    return li;
}

//Função para limpar o input
function limpaInput() {
    inputTarefa.value = '';
    //Mantem o cursor no input
    inputTarefa.focus();
}

//Função para criar o botão de apagar e declarando uma class para ele
function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.innerHTML = 'Apagar';  
    li.appendChild(botaoApagar); 
}

//Criando um evento para para a tecla OK
inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

//criando um evento para o botão Adicionar
btnAdicionar.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

//função para exibir a nova tarefa dentro de um <li> dentro do HTML
function criaTarefa(textoInput) {   
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}
//Função para criar um evento ao clicar no botão apagar que foi criado junto com a <li>
document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

//Criando uma função para salvar tarefas criandas em <li>
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    //Criando uma string do array convertida para JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

//Função para ler as tarefas e jogalas novamente nas tarefas
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    //Convertendo um JSON novamente para array
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();