document.addEventListener("DOMContentLoaded", function () {
  // Pegando os elementos do HTML
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Função para adicionar tarefa
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Digite uma tarefa!");
      return;
    }

    // Criar elementos
    const li = document.createElement("li");
    const status = document.createElement("span");
    const text = document.createElement("span");
    const removeBtn = document.createElement("button");

    // Conteúdo
    status.textContent = "⬜";
    text.textContent = taskText;
    removeBtn.textContent = "🗑";

    // Classes
    text.classList.add("task-text");
    removeBtn.classList.add("remove-btn");

    // Montagem
    li.appendChild(status);
    li.appendChild(text);
    li.appendChild(removeBtn);

    taskList.appendChild(li);

    // Limpa input
    taskInput.value = "";

    // Remover tarefa
    removeBtn.addEventListener("click", function () {
      li.remove();
    });

    // Marcar como concluída
    status.addEventListener("click", function () {
      const isDone = status.textContent === "✅";

      status.textContent = isDone ? "⬜" : "✅";
      text.style.textDecoration = isDone ? "none" : "line-through";
      text.style.color = isDone ? "#111827" : "#6B7280";
    });
  }

  // Clique no botão +
  addTaskBtn.addEventListener("click", addTask);

  // Enter no input
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
