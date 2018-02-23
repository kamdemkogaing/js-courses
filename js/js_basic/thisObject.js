$(document).ready(function () {

    var eleve = {
        nom: "patrick kamdem",
        present: function () {
            var self = this;
            var demo = {
                demo: function () {
                    console.log(self.nom); // ca ne marchera pas, this fais reference ici á l'obejct demo, dans lequel nom n'est pas defini.
                }
            };
            demo.demo();
            console.log(self.nom + " est present.");
        }
    };

    eleve.present();

});