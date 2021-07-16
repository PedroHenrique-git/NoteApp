import { createTask, addTask } from "./taskControl";

export function setDataInLocalStorage() {
    const tasks = document.querySelectorAll('.task');
    const dataTasks = [];
    
    tasks.forEach(task => {
        dataTasks.push({
            id: task.id,
            parent: task.getAttribute('parent'),
            content: task.querySelector('.content').innerText,
        });  
    });
    
    localStorage.setItem('tasks', JSON.stringify(dataTasks));
}

export function renderData() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if ( !tasks ) return;

    tasks.forEach(tsk => {
        const task = createTask(tsk.content, tsk.parent, tsk.id);
        addTask(tsk.parent, task);
    });
}