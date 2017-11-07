$(document).ready(function () {
    var list = document.querySelector('ul');

    var eventToDoList =  function (e) {
          if( e.target.tagName === 'LI') {
             e.target.classList.toggle('done');
          }
    };

    list.addEventListener('click',eventToDoList, false);
});