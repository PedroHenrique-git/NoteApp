(function(){

    const buttonToAddNote = document.querySelector('#addNote');
    const main = document.querySelector('.note-container');
    const excluir = document.querySelectorAll('.excluir');
    const dataDeHoje = new Date(Date.now()).toLocaleDateString();
    const horaDeHoje = new Date(Date.now()).toLocaleTimeString();
    
    const createDiv = () => {
        const div = document.createElement('div');
        div.classList.add('note');
        return div;
    }
    const createH1 = () => {
        const h1 = document.createElement('h1');

        const a = document.createElement('a');
        a.innerHTML = 'excluir';
        a.classList.add('excluir');

        h1.textContent = `${dataDeHoje} - ${horaDeHoje}`;
        h1.appendChild(a);

        return h1;
    }
    const createTextArea = () =>{
        const textArea = document.createElement('textarea');
        return textArea;
    }
    
    function createNote(){
        const textArea = createTextArea();
        const h1 = createH1();
        let div = createDiv();
        div.appendChild(h1);
        div.appendChild(textArea);
        main.appendChild(div);
    }

    buttonToAddNote.addEventListener('click',function(){
        createNote();   
    });

    document.addEventListener('click',function(e){
        const target = e.target;
        if(target.classList.contains('excluir')){
            target.parentNode.parentNode.remove();
        }
    })

})();
