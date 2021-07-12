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

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        const task = createTask(textarea.value);
        const target = document.querySelector(`.${getTargetList()}`);
        addTask(target, task);
        hideModal(); 
    });

    modal.addEventListener('click', (e) => {
        if ( e.target.classList.contains('close_modal') ) {
            hideModal(); 
        }
    });

})();