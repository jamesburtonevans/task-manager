const res = await fetch("/api/tasks");
const data = await res.json();

console.log("Fetched data:", data);
console.log("Is Array:", Array.isArray(data));

const tasks = data;

tasks.forEach(task => {
  const li = document.createElement("li");
  li.textContent = task.title;
  document.getElementById("task-list").appendChild(li);
});
