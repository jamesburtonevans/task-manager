const task = document.querySelector(".task");
const taskButton = document.querySelector(".task-completion");
const taskTitle = document.querySelector(".task-title");

taskButton.addEventListener("click", () => {
  const isComplete = task.classList.toggle("complete");
  taskButton.textContent = isComplete ? "✔" : "";
});
