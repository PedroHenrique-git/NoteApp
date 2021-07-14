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

        if( target.classList.contains('delete_icon') ) {
            target
                .parentNode
                .parentNode
                .parentNode
                .remove();
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
            const dropedElement = document.getElementById(data);
            dropedElement.setAttribute('parent', target.classList[0]);
            target.appendChild(dropedElement);
            target.classList.remove('drop');

            if ( noneLi ) {
                noneLi.remove();
            }

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

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        const noneLi = document.querySelector(`.${getTargetList()} .none`);
        const task = createTask(textarea.value, getTargetList());
        addTask(getTargetList(), task);
        hideModal(); 

        if ( noneLi ) {
            noneLi.remove();
        }

        setDataInLocalStorage();
    });

    modal.addEventListener('click', (e) => {
        if ( e.target.classList.contains('close_modal') ) {
            hideModal(); 
        }
    });

    window.addEventListener('load', renderData());

    // FUNCTIONS

    function setDataInLocalStorage() {
        const lis = document.querySelectorAll('li');
        const dataLi = [];
        
        lis.forEach(li => {
            if ( !li.classList.contains('none') ) {
                dataLi.push({
                    id: li.id,
                    parent: li.getAttribute('parent'),
                    content: li.querySelector('p').innerText,
                });  
            }
        });
        
        localStorage.setItem('tasks', JSON.stringify(dataLi));
    }

    function renderData() {
        const lis = JSON.parse(localStorage.getItem('tasks'));
        console.log(lis);

        if ( !lis ) return;

        lis.forEach(li => {
            const task = createTask(li.content, li.parent, li.id);
            addTask(li.parent, task);
        });
    }

})();