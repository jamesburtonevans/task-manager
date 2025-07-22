const createTaskButton = document.querySelector(".create-task-button");
const taskContainer = document.querySelector(".task-container");
const incompleteContainer = taskContainer.querySelector(".incomplete");
const completedContainer = taskContainer.querySelector(".completed");

createTaskButton.addEventListener("click", () => {
  manager.addTask();
});

class TaskManager {
  constructor(container) {
    this.container = container;
    this.tasks = [];
  }

  addTask(taskData = {}) {
    const task = new Task(taskData, (taskInstance) => this.removeTask(taskInstance));
    this.tasks.push(task);
    this.container.appendChild(task.getElement());
    task.focusTitle();
  }

  removeTask(taskInstance) {
    this.tasks = this.tasks.filter(t => t !== taskInstance);
  }

  getAllData() {
    return this.tasks.map(task => task.getData());
  }
}

class Task {
  constructor({ id = crypto.randomUUID(), title = "New Task", completed = false }, onDelete) {
    this.data = { id, title, completed };
    this.onDelete = onDelete;

    this.element = document.createElement("div");
    this.element.classList.add("task");
    this.element.dataset.id = this.data.id;

    this.element.innerHTML = `
      <header>
        <button class="task-reorder">≡</button>
        <button class="task-completion"></button>
        <input class="task-title" placeholder="New Task" />
        <button class="task-delete">🗑</button>
      </header>
    `;

    // === TASK BEHAVIOR === //
    this.taskComplete = this.element.querySelector(".task-completion");
    this.taskTitle = this.element.querySelector(".task-title");
    this.taskDelete = this.element.querySelector(".task-delete");
    this.taskReorder = this.element.querySelector(".task-reorder");

    // Completion //
    this.taskComplete.addEventListener("click", () => {
      this.data.completed = !this.data.completed;
      this.element.classList.toggle("complete", this.data.completed);
      this.taskComplete.textContent = this.data.completed ? "✔" : "";
    });
    // Edit name //
    this.taskTitle.addEventListener("input", () => {
      this.data.title = this.taskTitle.value;
    });
    // Remove //
    this.taskDelete.addEventListener("click", () => {
      this.element.remove();
      this.onDelete?.(this);
    });
  }
  getElement() {
    return this.element;
  }

  getData() {
    return { ...this.data };
  }

  focusTitle() {
    this.taskTitle.focus();
  }
}

const manager = new TaskManager(taskContainer);

new Sortable(document.querySelector(".task-container"), {
  animation: 150,
  handle: ".task-reorder",
});