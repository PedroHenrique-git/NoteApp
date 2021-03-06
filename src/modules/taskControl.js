import iconGenerator from "./iconGenerator";
import { createLi, createBtn, createDiv } from './createElements';
import idGenerator from "./idGenerator";

export function createTask(task, parent, id = idGenerator(0, 100000)) {
    const li = createLi();

    const content = createDiv('content');
    content.classList.add('task_content');
    content.innerText = task;

    const div = createDiv('task_actions');
    div.classList.add('task_actions');

    const btn1 = createBtn('delete_btn');
    const deleteIcon = iconGenerator('clear');
    deleteIcon.classList.add('delete_icon');
    btn1.appendChild(deleteIcon);

    const btn2 = createBtn('edit_btn');
    const editIcon = iconGenerator('edit');
    editIcon.classList.add('edit_icon');
    btn2.appendChild(editIcon);

    div.appendChild(btn1);
    div.appendChild(btn2);

    li.appendChild(content);
    li.appendChild(div);

    li.className = "task drag-item";
    li.id = id; 
    li.draggable = true;
    li.setAttribute('parent', parent);

    return li;
}

export function addTask(target, task) {
    const node = document.querySelector(`.${target}`);
    node.appendChild(task);
}