function affilinet(w, d, namespace, domain, progId, tagId, undefined){
  w[namespace] = w[namespace] || {}; 
  var act = w[namespace], payload = []; 
  act.tags = act.tags || []; 
  act.tags.push(tagId, payload); 
	var protocol = d.location.protocol; 
  
  var procurerId = UNOUNO.tracking.procurerId || '';

  var arrayTariffIdAffilinet = [];

  for (var i = 0; i < UNOUNO.tracking.cart.products.length; i++ ) {
      var content = {
        product_id: UNOUNO.tracking.cart.products[i].tariffId, 
        product_price: UNOUNO.tracking.cart.products[i].costs.firstBilling, 
        product_quantity: 1, 
        product_brand: ''
    };
    arrayTariffIdAffilinet.push(content);
  }
  
  if (procurerId.indexOf('-') > -1) {
    procurerId = procurerId.substring(procurerId.indexOf('-') + 1)
  } else {
    procurerId = '';
  }

// Start editable part OrderTracking
  payload.push({ 
    module: 'OrderTracking', 
    event: 'Basket',
    publisher_id: UNOUNO.tracking.profisellerId,
    publisher_subid: procurerId,
    order_id: UNOUNO.tracking.orderId, 
    basket_items: arrayTariffIdAffilinet
	}); 
// End editable part OrderTracking

// Start editable part Profiling Checkout 
  payload.push({ 
    // mandatory 
    module: 'Profiling', 
    event: 'Checkout',
  });
// End editable part Profiling Checkout
  
  if (act.get === undefined) { 
    var s = d.createElement('script'); 
    s.type = 'text/javascript'; 
    s.src = protocol + '//' + domain + '/' + 'affadvc.aspx?ns=' + namespace + '&dm=' + domain + '&site=' + progId + '&tag=' + tagId; 
    s.async = false; // always keep false for standard tracking 
  	(d.getElementsByTagName('body')[0] || d.getElementsByTagName('head')[0]).appendChild(s); 
  } else { 
    act.get(w, d, progId, tagId); 
  } 
}

if (UNOUNO.tracking.land == "de" || UNOUNO.tracking.land == "at") {
 	affilinet(window, document, 'aff_act_1.0', 'act.webmasterplan.com' , 12688, 'tag-01');
  } 
if (UNOUNO.tracking.land == "es") {
 	affilinet(window, document, 'aff_act_1.0', 'act.epartner.es' , 5327, 'tag-01');
} 
if (UNOUNO.tracking.land == "fr") {
	affilinet(window, document, 'aff_act_1.0', 'act.reussissonsensemble.fr' , 4320, 'tag-01');
} 
if (UNOUNO.tracking.land == "uk") {
  affilinet(window, document, 'aff_act_1.0', 'act.successfultogether.co.uk' , 3759, 'tag-01');
}