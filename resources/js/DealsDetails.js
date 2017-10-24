
function getDetails(){
      var id = getCookie("selectDeals");
      var deal = read("/deals/"+id, LoadOfferDatails);
}
var LoadOfferDatails = function (offersDeals){
      document.getElementsByClassName('Deals-Details-Name')[0].innerText = offersDeals[0].Name;
      document.getElementsByClassName('Deals-Details-Price')[0].innerText = "Precio: $"+offersDeals[0].price;
      document.getElementsByClassName('Deals-Details-Description')[0].innerText = offersDeals[0].description;
}
getDetails();