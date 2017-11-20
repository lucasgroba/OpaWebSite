
function getDetails(){
      var id = getCookie("selectDeal");
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

function AddDealToCart(elemento){
      var logged = getCookie("isLogged");
      if(logged){
          var userData = getCookie('UserData');
          read('/users/'+userData,UpdateCart)
      }
      else{
          switchContent('templates/account/login.html');
      }
  }
  
  var UpdateCart = function(UserData){
      var IdDeal = getCookie('selectDeal');
      deleteCookie('selectDeal');
      UserData.cart.push(IdDeal);
      update("/users/",UserData.id,JSON.stringify(UserData),);
      document.getElementById("cart").innerText = '   '+UserData.cart.length;
      swal({
          title: "La oferta se agrego al carrito",
          icon: "success",
      });
  }


getDetails();