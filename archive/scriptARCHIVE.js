const createTaskButton = document.querySelector(".create-task-button");
const taskContainer = document.querySelector(".task-container");
  
createTaskButton.addEventListener("click", () => {
  const createTask = document.createElement("div");
  createTask.classList.add("task");
  createTask.dataset.id = crypto.randomUUID();

  createTask.innerHTML = `
    <header>
      <button class="task-reorder">≡</button>
      <button class="task-completion"></button>
      <input class="task-title" placeholder="New Task"></input>
      <button class="task-delete">🗑</button>
    </header>
  `;

  // === TASK BEHAVIOR === //
  const taskComplete = createTask.querySelector(".task-completion");
  const taskTitle = createTask.querySelector(".task-title");
  const taskDelete = createTask.querySelector(".task-delete");


  // Reorder //

  // Completion //
  taskComplete.addEventListener("click", () => {
    const isComplete = createTask.classList.toggle("complete");
    taskComplete.textContent = isComplete ? "✔" : "";
  });
  // Edit name //
  taskTitle.addEventListener("click", () => {
    taskTitle.contentEditable = true;
    taskTitle.focus();
  });
  // Remove //
    taskDelete.addEventListener("click", () => {
    createTask.remove();
  });

  taskContainer.appendChild(createTask);
  taskTitle.contentEditable = true;
  taskTitle.focus();


  // == TASK TITLE BLANK == //
  function isTaskTitleEmpty(taskTitle) {
    if (taskTitle.textContent == null) {
      console.log('The element has empty text content or does not exist.');
    }
    return;
  }
})
