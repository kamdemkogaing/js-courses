
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
  var afficherOnglets = function (a, animations ) {

    if (animations === undefined) {
      animations = true;
    }
   
    var li = a.parentNode;
    var div = a.parentNode.parentNode.parentNode;
    var activeTab = div.querySelector('.tab-content.active');
    var aAfficher = div.querySelector(a.getAttribute('href'));
     
      
     if(li.classList.contains('active')) {
       return false;
     }
     
     // //On retire la class active de l'onglet actif
     // div.querySelector('.tabs .active').classList.remove('active');   
     // //J'ajoute la class active á l'onglet actuel
     // li.classList.add('active');
     // //On retire la class active sur le contenu actif
     // div.querySelector('.tab-content.active').classList.remove('active');    
     // //J'ajoute la class active sur le contenu correspondant á mon clic
     // div.querySelector(a.getAttribute('href')).classList.add('active');

     if (animations) {
       activeTab.classList.add('fade');
       activeTab.classList.remove('in');

       var transitionend = function () {
          this.classList.remove('fade');
          this.classList.remove('active');
          aAfficher.classList.add('active');
          aAfficher.classList.add('fade');
          aAfficher.offsetWidth;
          aAfficher.classList.add('in');
          activeTab.removeEventListener('transitionend', transitionend);
       };

       activeTab.addEventListener('transitionend',transitionend);
     } else {
       aAfficher.classList.add('active');
       activeTab.classList.remove('active');
     }

     //ON ajoute la class fade sur l'element actif
     //A la fin de l'animation
     //  On retire la class fade et active
     //  On ajoute la class active et fade á l'élément á afficher
     //  On ajoute la class in
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
   var hasChange = function (e) {
     var hash = window.location.hash;
     var a = document.querySelector('a[href="' + hash + '"]');
     if (a !== null && !a.classList.contains('active')) {
       afficherOnglets(a, e !== undefined);
     }
   };

   window.addEventListener('haschange', hasChange);
   hasChange();
  
  })();
});




