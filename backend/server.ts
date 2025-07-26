import { TaskManager } from "../shared/TaskManager.ts";
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";

const taskManager = new TaskManager();

// Create some example tasks
taskManager.createTask("Scroll reels");
taskManager.createTask("Play Overwatch 2");
taskManager.createTask("Pretend to be productive");

serve(async (req) => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return await serveFile(req, "./index.html");
  }

  if (url.pathname === "/frontend/dist/main.js") {
    return await serveFile(req, "./frontend/dist/main.js");
  }

  if (url.pathname === "/styles.css") {
    return await serveFile(req, "./styles.css");
  }

  if (url.pathname === "/tasks" && req.method === "GET") {
    const tasksArray = [...taskManager.tasks.values()];
    return new Response(JSON.stringify(tasksArray), {
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response("Not found", { status: 404 });
});
