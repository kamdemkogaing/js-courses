/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
 
 var testGlobalVarial = " Hallo Patrick Kamdem ";
 
 var result = function () {
  var results = testGlobalVarial.trim().split(" ");
  return results;
 };
 
 console.log(result());
});


