// Selecionando elementos do DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const completedTasksList = document.getElementById('completed-tasks');

// Função para adicionar uma nova tarefa
function addTask(taskName) {
    // Criar um novo item de lista
    const listItem = document.createElement('li');
    listItem.textContent = taskName;

    // Adicionar checkbox para marcar como concluída
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        listItem.classList.toggle('completed');
        if (listItem.classList.contains('completed')) {
            // Se a tarefa for marcada como concluída, mova-a para a lista de tarefas concluídas
            completedTasksList.appendChild(listItem);
        } else {
            // Se a tarefa for desmarcada, mova-a de volta para a lista de tarefas a fazer
            todoList.appendChild(listItem);
        }
    });
    listItem.appendChild(checkbox);

    // Adicionar o novo item de lista à lista de tarefas
    todoList.appendChild(listItem);
}

// Evento de envio do formulário para adicionar uma nova tarefa
todoForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    const taskName = todoInput.value.trim(); // Obtém o valor do campo de entrada e remove espaços em branco extras
    if (taskName !== '') {
        addTask(taskName); // Adiciona a nova tarefa à lista
        todoInput.value = ''; // Limpa o campo de entrada
    }
});
