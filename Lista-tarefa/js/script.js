const inputTarefa = document.querySelector('.input-tarefa'); 
const btnAdicionar = document.querySelector('.adicionar'); 
const tarefas = document.querySelector('.tarefas'); 

function criaTarefa(textoInput) {   
    console.log(textoInput);
}

btnAdicionar.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});