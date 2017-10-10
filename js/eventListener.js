/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
 
 // var testGlobalVarial = " Hallo Patrick Kamdem ";
 
 // var result = function () {
 //  var results = testGlobalVarial.trim().split(" ");
 //  return results;
 // };
 
 // console.log(result());

 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // var ps = document.querySelectorAll('p');

  // for (var i = 0; i < ps.length; i++) {
  //  var p = ps[i];
  //  var rougit = function () {
  //      // console.log('rougit',this); //this ici fait reference á l'object clicqué
  //      this.classList.toggle('red');
  //  };
  //  var demo = function () {
  //      console.log('demo',this); //this ici fait reference á l'Object global windows
  //  };

  //  // $("p").click(function(){
  //  //  $(this).toggleClass("red");
  //  // })

  //  //Lorsque on cré un Listener, le this fait reference sur l'élemenet sur lequel on est.
  //  p.addEventListener('click', rougit);
  //  demo();
  // }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // var liens = document.querySelectorAll('a.external');

  // for (var i = 0; i < liens.length; i++) {

  //   var lien = liens[i];

  //   lien.addEventListener('click', function (e) {
  //     var reponse = window.confirm('Voulez vous vraiment quitter le site');
      
  //     if (reponse === false) {
  //       e.preventDefault();
  //     }
  //   });
  // }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // var p = document.querySelector('p');

  // var onClick = function (e) {

  //   this.classList.add('red');

  //   e.preventDefault();

  //   p.removeEventListener('click', onClick);
  // };

  // p.addEventListener('click', onClick);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  var  demo = document.querySelector('#demo');

  demo.focus();

  document.querySelector('#form').addEventListener('submit', function (e) {

      var age = parseInt(document.querySelector('#age').selectedOptions[0].value, 10);

      if (age < 18) {
        alert('Vous ne pouvez pas rentrer!');
        e.preventDefault();
      }

  });
});
