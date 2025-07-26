import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";
import { TaskManager } from "../shared/TaskManager.ts";

const taskManager = new TaskManager();
taskManager.createTask("Scroll reels");
taskManager.createTask("Play Overwatch 2");

Deno.serve(async (req) => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return await serveFile(req, "./index.html");
  }

  if (url.pathname === "/styles.css") {
    return await serveFile(req, "./styles.css");
  }

  if (url.pathname === "/frontend/main.js") {
    return await serveFile(req, "./frontend/main.js");
  }

  if (url.pathname === "/api/tasks") {
    const tasks = taskManager.getAllTasks();
    return new Response(JSON.stringify(tasks), {
      headers: {
        "Content-Type": "application/json"
      },
    });
  }

  if (req.method === "POST" && url.pathname === "/api/tasks") {
  const body = await req.json();
  const task = taskManager.createTask(body.title);
  return new Response(JSON.stringify(task), {
    headers: { "Content-Type": "application/json" },
  });
}

if (req.method === "DELETE" && url.pathname.startsWith("/api/tasks/")) {
  const id = url.pathname.split("/").pop();
  taskManager.removeTask(id);
  return new Response("Deleted", { status: 200 });
}

if (req.method === "PUT" && url.pathname.startsWith("/api/tasks/")) {
  const id = url.pathname.split("/").pop();
  const updates = await req.json();
  const updated = taskManager.updateTask(id, updates);
  return new Response(JSON.stringify(updated), {
    headers: { "Content-Type": "application/json" },
  });
}



  return new Response("Not found", { status: 404 });
});
