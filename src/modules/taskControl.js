import iconGenerator from "./iconGenerator";
import { createLi, createBtn, createDiv } from './createElements';

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

    return li;
}

export function addTask(target, task) {
    target.appendChild(task);
}