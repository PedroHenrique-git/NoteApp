import { setTargetList, showModal } from './modal';
import { setDataInLocalStorage } from './localStorage';

export function openModal(target)  {
    const list = target.nextElementSibling;
    setTargetList(list.className)
    showModal();
}

export function deleteTask(target) {
    target.remove();
    setDataInLocalStorage();
}

export function editTask(target) {
    const content = target.querySelector('.content');
    content.setAttribute('contenteditable', 'true');
    content.focus();

    content.addEventListener('focusout', function () {
        content.setAttribute('contenteditable', 'false');
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        const index = tasks.findIndex((task) => task.id === target.id);

        if( index === - 1 ) return;

        tasks[index].content = this.innerText;
        setDataInLocalStorage();
    });    
}