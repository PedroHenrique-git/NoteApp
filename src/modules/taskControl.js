import iconGenerator from "./iconGenerator";
import { createLi, createBtn, createDiv } from './createElements';
import idGenerator from "./idGenerator";

export function createTask(task) {
    const li = createLi();
    li.innerText = task;

    const div = createDiv('task_actions');
    div.classList.add('task_actions');

    const btn1 = createBtn('delete_btn');
    btn1.appendChild(
        iconGenerator('delete')
    );

    const btn2 = createBtn('edit_btn');
    btn2.appendChild(
        iconGenerator('edit_note')
    );

    div.appendChild(btn1);
    div.appendChild(btn2);

    li.appendChild(div);

    li.className = "task drag-item";
    li.id = idGenerator(0, 100000); 
    li.draggable = true;

    return li;
}

export function addTask(target, task) {
    target.appendChild(task);
}