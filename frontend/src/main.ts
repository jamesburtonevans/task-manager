async function loadTasks() {
  const res = await fetch("/tasks");
  if (!res.ok) throw new Error("Failed to fetch tasks");
  const tasks = await res.json();

  tasks.forEach((task: { title: string }) => {
    const el = document.createElement("div");
    el.className = "task";
    el.textContent = task.title;
    document.body.appendChild(el);
  });
}

loadTasks();
