"use strict";

(function () {
  var buttonToAddNote = document.querySelector('#addNote');
  var main = document.querySelector('.note-container');
  var excluir = document.querySelectorAll('.excluir');
  var dataDeHoje = new Date(Date.now()).toLocaleDateString();
  var horaDeHoje = new Date(Date.now()).toLocaleTimeString();

  var createDiv = function createDiv() {
    var div = document.createElement('div');
    div.classList.add('note');
    return div;
  };

  var createH1 = function createH1() {
    var h1 = document.createElement('h1');
    var a = document.createElement('a');
    a.innerHTML = 'excluir';
    a.classList.add('excluir');
    h1.textContent = "".concat(dataDeHoje, " - ").concat(horaDeHoje);
    h1.appendChild(a);
    return h1;
  };

  var createTextArea = function createTextArea() {
    var textArea = document.createElement('textarea');
    return textArea;
  };

  function createNote() {
    var textArea = createTextArea();
    var h1 = createH1();
    var div = createDiv();
    div.appendChild(h1);
    div.appendChild(textArea);
    main.appendChild(div);
  }

  buttonToAddNote.addEventListener('click', function () {
    createNote();
  });
  document.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('excluir')) {
      target.parentNode.parentNode.remove();
    }
  });
})();