import '../public/assets/css/index.css';
import './modules/modal';
import { addTask, createTask } from './modules/taskControl';
import { hideModal, modal, setTargetList, showModal, getTargetList } from './modules/modal';


(function() {
    // Selectors

    const form = document.querySelector('.form_add-task');

    // Listerners

    document.addEventListener('click', (e) => {
        const target = e.target;
        if( target.classList.contains('btn') ) {
            const list = target.nextElementSibling;
            setTargetList(list.className)
            showModal();
        }
    });

    document.addEventListener('dragstart', (e) => {
        const target = e.target;
        if ( target.classList.contains('drag-item')  ) {
            e.dataTransfer.setData('text/html', target.id);
        }
    });

    document.addEventListener('dragover', (e) => {
        e.preventDefault();
        const target = e.target;
        if( target.classList.contains('dropzone') ) {
            target.classList.add('drop');
        }
    });

    document.addEventListener('dragenter', (e) => {
        e.preventDefault();
        const target = e.target;
        if( target.classList.contains('dropzone') ) {
            target.classList.add('drop');
        }
    });

    document.addEventListener('drop', (e) => {
        e.preventDefault();
        const target = e.target;
        if( target.classList.contains('dropzone') ) {
            const noneLi = document.querySelector(`.${target.classList[0]} .none`);
            const data = e.dataTransfer.getData('text/html');
            target.appendChild(document.getElementById(data));
            target.classList.remove('drop');
            noneLi.remove();
        }
    });

    document.addEventListener('dragleave', (e) => {
        e.preventDefault();
        const target = e.target;
        if( target.classList.contains('dropzone') ) {
            target.classList.remove('drop');
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        const task = createTask(textarea.value);
        const target = document.querySelector(`.${getTargetList()}`);
        const noneLi = document.querySelector(`.${getTargetList()} .none`);
        addTask(target, task);
        hideModal(); 
        noneLi.remove();
    });

    modal.addEventListener('click', (e) => {
        if ( e.target.classList.contains('close_modal') ) {
            hideModal(); 
        }
    });

})();