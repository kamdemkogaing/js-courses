/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
 
 var testGlobalVarial = " Hallo Patrick Kamdem ";
 
 var result = function () {
  var results = testGlobalVarial.trim().split(" ");
  return results;
 };
 
 console.log(result());

 //+++++++++++++++++++++++++++++++++++++++++++++++

  var ps = document.querySelectorAll('p');

  for (var i = 0; i < ps.length; i++) {
   var p = ps[i];
   var rougit = function () {
       // console.log('rougit',this); //this ici fait reference á l'object clicqué
       this.classList.toggle('red');
   };
   // var demo = function () {
   //     console.log('demo',this); //this ici fait reference á l'Object global windows
   // };

   //Lorsque on cré un Listener, le this fait reference sur l'élemenet sur lequel on est.
   p.addEventListener('click', rougit);
   //demo();
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++

});


