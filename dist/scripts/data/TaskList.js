import { SortType } from './SortType.js';
export class TaskList {
    constructor(title = "New Task", sortType = SortType.Manual) {
        this.title = title;
        this.sortType = sortType;
        this.id = crypto.randomUUID();
        this.order = [];
    }
    // Methods for Handling List Changes //
    addTaskToList(taskId) {
        if (!this.order.includes(taskId)) {
            this.order.push(taskId);
        }
    }
    removeTaskFromList(taskId) {
        const index = this.order.indexOf(taskId);
        if (index !== -1) {
            this.order.splice(index, 1);
        }
        return;
    }
    reorderTasksInList(taskId, targetIndex) {
        const currentIndex = this.order.indexOf(taskId);
        if (currentIndex !== -1) {
            this.order.splice(currentIndex, 1);
            this.order.splice(targetIndex, 0, taskId);
        }
    }
}
