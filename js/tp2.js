
$(document).ready(function () {
 
 
 //Je cree une fonction qui s'auto appelle, dans ce cas je suis sure, du au fait que les variables d'une fonction n'ont pas une portée global, celles-ci
 // ne seront pas écraser.
 (function () {
  /* 
  Lorsque l'on clique sur un onglet
    On retire la class active de l'onglet actif
    j'ajoute la class active á l'onglet actuel

    On retire la class active sur le contenu actif
    j'ajoute la class active sur le contenu correspondant á l'onglet cliqué
 */
 
  //Je defini une fonction qui m'affice les onglets
  var afficherOnglets = function (a) {
   
    var li = a.parentNode;
    var div = a.parentNode.parentNode.parentNode;
     
      
     if(li.classList.contains('active')) {
       return false;
     }
     
     //On retire la class active de l'onglet actif
     div.querySelector('.tabs .active').classList.remove('active');
     
     //J'ajoute la class active á l'onglet actuel
     li.classList.add('active');
     
     //On retire la class active sur le contenu actif
     div.querySelector('.tab-content.active').classList.remove('active');
     
     //J'ajoute la class active sur le contenu correspondant á mon clic
     div.querySelector(a.getAttribute('href')).classList.add('active');
  };
  
  //Je selectionne tous les element a dans un tableau
  var tabs = document.querySelectorAll('.tabs a');
  
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {
      afficherOnglets(this);
    });
  }
  
   /*
    Je recupere le hash
    Ajouter la class active sur le lien href "hash"
    Retirer la class actibe sur les autres onglets
    Afficher / Masquer les contenus
   */

   //Je lis # (hash) d'un lien
   var hash = window.location.hash;
   
   var a = document.querySelector('a[href="' + hash + '"]');
  
   if (a !== null && !a.classList.contains('active')) {
     afficherOnglets(a);
   }
  
  })()
});




