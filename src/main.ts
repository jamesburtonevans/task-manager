import { TaskManager } from './data/TaskManager.js';

const taskManager = new TaskManager();



// Testing //

const t1 = taskManager.createTask("Scroll reels");
const t2 = taskManager.createTask("Play Overwatch 2");
const t3 = taskManager.createTask("");

console.log("Initial tasks in task manager:", Array.from(taskManager.tasks.values()).map(task => task.title));

taskManager.updateTask(t1.id, { completed: true });
taskManager.updateTask(t2.id, { title: 'Play Fortnite' });

console.log("Tasks completion updated:", Array.from(taskManager.tasks.values()).map(task => task.completed));
console.log("Task Names updated:", Array.from(taskManager.tasks.values()).map(task => task.title));

const l1 = taskManager.createList("Homework");
const l2 = taskManager.createList("Chores");

console.log("Lists created:", Array.from(taskManager.lists.values()).map(list => list.title));

l1.addTaskToList(t1.id);
l1.addTaskToList(t2.id);
l1.addTaskToList(t3.id);

console.log("l1.order:", l1.order);

l1.removeTaskFromList(t1.id);

console.log(l1.order);

l1.reorderTasksInList(t3.id, 0);

console.log(l1.order);

l2.addTaskToList(t2.id);
l2.addTaskToList(t3.id);

console.log("l2 order:", l2.order);

taskManager.removeList(l1.id);

console.log(taskManager.lists);

console.log("l2 order:", l2.order);

taskManager.removeTask(t2.id)

console.log("l2 order:", l2.order);
console.log("Tasks in Manager:", Array.from(taskManager.tasks.values()).map(task => task.title));
