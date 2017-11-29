$(document).ready(function () {

	  $('div ul.tabs').each(function() {	  
		  var activeTab;
		  var tabContent;
		  var hrefLinks = $(this).find('a');


		  activeTab = $(hrefLinks.filter('[href="'+window.location.hash+'"]')[0] || hrefLinks[0]);
		  activeTab.addClass('active');

		  tabContent = $(activeTab[0].hash);

		  // Ausblenden des restlichen Inhalts
		  hrefLinks.not(activeTab).each(function () {
		    $(this.hash).hide();
		  });

		  // Binde den Click handler
		  $(this).on('click', 'a', function(e) {
		    // alte Tabs, inaktiv setzen
		    activeTab.removeClass('active');
		    tabContent.hide();

		    // Aktualisiere die Variablen mit dem neuen Link und Inhalt
		    activeTab = $(this);
		    tabContent = $(this.hash);

		    // der Tab aktive setzen
		    activeTab.addClass('active');
		    tabContent.show();
		  });
		});
}); 