
<script type="text/javascript">
 (function(UNOUNO, window, document) {
   UNOUNO.onload.queue.push(function(done) {

     var contentDomains = [];
		 var contentDomainsJSON_Object = " ";
 		 var userCountry = UNOUNO.tracking.land;
     var pageUrl = UNOUNO.tracking.url;
		 var pageName = UNOUNO.tracking.seite;
		 var fullPageUrl = 'https://'+pageUrl+'/'+pageName;
	 
	   //Empty Array added to get domanName values	 
		 var tldsArray = []; 
		 //Empty Array added to get domanNameTlds values
		 var tld = [];
		 //Empty Array added to get Domain Prices
		 var domainPrices = [];
		 
		 var domainListLengthInCart = $q('div.domainlist-wrapper ul.domainlist span li span.remove').length;

		 var domainNames = function () {
			 	for (var i = 0; i < domainListLengthInCart; i++) {
					tldsArray.push($q('ul.domainlist span li span.remove:eq(i)').getData('domain-name'));
			  }
			  //All checked Domains pushed in String Array
			  return tldsArray;
		 };
 
		 var domainNameTlds = function () {
	      for (var i = 0; i < domainListLengthInCart; i++) {
					tld.push(domainNames()[i].substr(domainNames()[i].lastIndexOf('.')+1));
				}
				//All matching Tlds pushed in String Array
				return tld;
		 };

		 var domainPricesTlds = function () {
	      for (var i = 0; i < domainListLengthInCart; i++) {
					domainPrices.push(UNOUNO.inline.domaincheck.prices.domainNameTlds()[i].grossActionPrice.toString());	
				}
				//return a Array of object Prices for all checked Domains
				return domainPrices;
		 };

		 for (var i = 0; i < domainNames().length; i++) {
        var content = {
          "domain":domainNames()[i],
          "tld":domainNames()[i].substr(domainNames()[i].lastIndexOf('.')+1)
        };
        contentDomains.push(content);
     }

     contentDomainsJSON_Object = JSON.stringify(contentDomains);

      //conditions start
	    if(['domaincheckresult'].indexOf(UNOUNO.params.page) === -1) { 
		      (function () {
					 //getValue of checked DomainQueryName
					 var domainName = document.getElementById("multicheck.Domain").value;
					 //getValue of checked DomainQueryTld
					 var tld = domainName.substr(domainName.lastIndexOf('.')+1);
					 
					  !function(f,b,e,v,n,t,s){
						if(f.fbq)return;
						   n=f.fbq=function(){
							 n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
						};
						if(!f._fbq)f._fbq=n;
						n.push=n;
						n.loaded=!0;
						n.version='2.0';
						n.queue=[];
						t=b.createElement(e);
						t.async=!0;
						t.src=v;
						s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)
					}(window, document,'script','//connect.facebook.net/en_US/fbevents.js');

					fbq('init', '635474146651132');
					fbq('track', 'PageView');
					fbq('track', 'ViewContent', {
						content_type: 'domains',
						content_name: domainName,
						content_category: tld
					});
					fbq('trackCustom', 'Registrar', {
					  regID:'1&1'});
			  })();

				(function () {
						var axel = Math.random() + "";
				    var a = axel * 10000000000000;

				    var d = document,
				      g = d.createElement('iframe'),
				      s = d.getElementsByTagName('iframe')[0];
				      g.width = '1';
				      g.height = '1';
				      g.frameborder = '0';
				      g.style = 'display:none';
				      g.src = 'https://6883423.fls.doubleclick.net/activityi;src=6883423;type=visit0;cat=1and100;u2='+fullPageUrl+';u5='+userCountry+';u6='+pageName+';u10='+domainName+';u11='+tld+';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num='+a+'?';
				      s.parentNode.insertBefore(g, s);
				})();	 
	    } 

	    if (['costs'].indexOf(UNOUNO.params.page) === -1) {
			 (function () { 
				!function(f,b,e,v,n,t,s){
					  if(f.fbq)return;
					     n=f.fbq=function(){
						  n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
					  };
					  if(!f._fbq)f._fbq=n;
					  n.push=n;
					  n.loaded=!0;
					  n.version='2.0';
					  n.queue=[];
					  t=b.createElement(e);
					  t.async=!0;
					  t.src=v;
					  s=b.getElementsByTagName(e)[0];
					  s.parentNode.insertBefore(t,s)
				  }(window,document,'script','//connect.facebook.net/en_US/fbevents.js');

		        fbq('init', '635474146651132');
		        fbq('track', 'PageView');
						fbq('track', 'AddToCart', {
							  content_type: 'Domains',
							  content: contentDomainsJSON_Object,
							  value: 'cartTotalPrice',
							  currency: 'USD'
						  });
		        fbq('trackCustom', 'Registrar', {
		          regID:'1&1'}); 
			  })();

			  (function () {
			  		var axel = Math.random() + "";
				    var a = axel * 10000000000000;

				    var d = document,
				      g = d.createElement('iframe'),
				      s = d.getElementsByTagName('iframe')[0];
				      g.width = '1';
				      g.height = '1';
				      g.frameborder = '0';
				      g.style = 'display:none';
				      g.src ='https://6883423.fls.doubleclick.net/activityi;src=6883423;type=cartl0;cat=1and10;u2='+fullPageUrl+';u5='+userCountry+';u6='+pageName+';u15='+domainNames()[0]+';u16='+domainNameTlds()[0]+';u17='+domainPricesTlds()[0]+';u21='+domainNames()[1]+';u22='+domainNameTlds()[1]+';u23='+domainPricesTlds()[1]+';u27='+domainNames()[2]+';u28='+domainNameTlds()[2]+';u29='+domainPricesTlds()[1]+';u33='+domainNameTlds()[3]+';u34='+domainPricesTlds()[3]+';u35='+domainPricesTlds()[3]+';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num='+a+'?';  
				 })();
	    }
		   
	    if(['baugewerbe-domains', 'bildungssektor-domains', 'finanzsektor-domains', 'essen-und-trinken-domains', 'tourismus-domains', 'lifestyle-domains', 'fotografie-domains', 'dienstleistung-domains', 'domains-for-the-construction-industry', 'domains-for-the-educational-sector', 'domains-for-the-financial-sector', 'domains-for-the-food-and-beverage-industry', 'domains-for-the-tourism-industry', 'lifestyle-domains', 'photography-domains', 'service-domains', 'dominios-para-la-industria-de-la-construcción', 'dominios-para-el-sector-educativo', 'dominios-para-el-sector-financiero', 'dominios-para-la-industria-de-la-comida-y-bebida', 'dominios-para-la-industria-del-turismo', 'dominios-de-estilo-de-vida', 'dominios-para-fotografia', 'dominios-para-servicios', 'domaines-pour-le-secteur-de-la-construction', 'domaines-pour-le-secteur-de-l-education', 'domaines-pour-le-secteur-financier', 'domaines-pour-le-secteur-de-l-industrie-alimentaire-et-des-boissons', 'domaines-pour-l-industrie-du-tourisme', 'domaines-pour-le-secteur-de-l-art-de-vivre', 'domaines-pour-le-secteur-de-la-photographie', 'domaines-pour-le-secteur-des-prestations-de-service', 'domini-settore-edile', 'domini-settore-educativo', 'domini-settore-finanziario', 'domini-gastronomia', 'domini-settore-turismo', 'domini-moda', 'domini-fotografia', 'domini-business'].indexOf(UNOUNO.params.pageAlternative) === -1) { 
		   (function () {
		   	 var axel = Math.random() + "";
				 var a = axel * 10000000000000;

			   var d = document,
		      g = d.createElement('iframe'),
		      s = d.getElementsByTagName('iframe')[0];
		      g.width = '1';
		      g.height = '1';
		      g.frameborder = '0';
		      g.style = 'display:none';
		      g.src = 'https://6883423.fls.doubleclick.net/activityi;src=6883423;type=visit0;cat=1and10;u1='pageUrl+';u2='+fullPageUrl+';u5='+userCountry+';u6='+pageName+';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num='+a+'?';  
			 })();		 
      }

     done();
   });
 })(UNOUNO, window, document);
</script>