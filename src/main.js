import '../public/assets/css/index.css';
import { addTask, createTask } from './modules/taskControl';
import { hideModal, getTargetList } from './modules/modal';
import { renderData, setDataInLocalStorage } from './modules/localStorage';
import { openModal, deleteTask, editTask  } from './modules/controlFunctions';


(function() {

    // Selectors

    const form = document.querySelector('.form_add-task');
    const closeModalBtn = document.querySelector('.close_modal');

    // document and window listeners

    window.addEventListener('DOMContentLoaded', renderData);

    closeModalBtn.addEventListener('click', () => {
        const textarea = document.querySelector('#task');
        textarea.value = '';
        hideModal();
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        const task = createTask(textarea.value, getTargetList());
        addTask(getTargetList(), task);
        hideModal(); 
        setDataInLocalStorage();
        textarea.value = '';
    });

    document.addEventListener('click', (e) => {
        const target = e.target;

        if( target.classList.contains('btn') ) {
            openModal(target);
        }

        if( target.classList.contains('delete_icon') ) {
            const liTarget = target.parentNode.parentNode.parentNode;
            deleteTask(liTarget);
        }

        if( target.classList.contains('edit_icon') ) {
            const liTarget = target.parentNode.parentNode.parentNode;
            editTask(liTarget);   
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
            const data = e.dataTransfer.getData('text/html');
            const dropedElement = document.getElementById(data);

            dropedElement.setAttribute('parent', target.classList[0]);
            target.appendChild(dropedElement);
            target.classList.remove('drop');

            setDataInLocalStorage();
        }
    });

    document.addEventListener('dragleave', (e) => {
        e.preventDefault();
        const target = e.target;
        if( target.classList.contains('dropzone') ) {
            target.classList.remove('drop');
        }
    });

})();