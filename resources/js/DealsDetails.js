
function getDetails(){
      var id = getCookie("selectDeal");
      alert("/deals/"+id);
      read("/deals/"+id, LoadOfferDatails);
}
var LoadOfferDatails = function (offersDeals){
      var deal_container = document.getElementsByClassName('product-info-container')[0];
      var container = document.getElementById('containerD');
      document.getElementById('containerD').innerHTML='';
      var deal = deal_container.cloneNode(true);
      deal.getElementsByClassName('Deals-Details-Name')[0].innerText = offersDeals.Name;
      deal.getElementsByClassName('Deals-Details-Price')[0].innerText = "Precio: $"+offersDeals.price;
      deal.getElementsByClassName('Deals-Details-Description')[0].innerText = offersDeals.description;
      deal.style.display ="inline-block";
      container.appendChild(deal);
}
getDetails();