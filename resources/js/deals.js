

function getDeals(){
    var order = "";
    order = getCookie("OrderDeals");
    switch (order) {
        case "Price":
            read("/deals?_sort=price&_order=ASC", loadOffers );
            break;
        case "MostViews":
            read("/deals?_sort=views&_order=DESC", loadOffers);
            break;
    
        default:
            read("/deals?_sort=rating&_order=DESC", loadOffers );
        break;
    }
        
}
function selectOrder(){
    var order = document.getElementById("order").value;
    setCookie("OrderDeals",order,1);
    getDeals();

}

// function modificarCarrito(carrito){

//     var productId = document.getElementsByClassName('offer-detail-name');
//     update("/carts/",carrito) 
// }



var loadOffers = function ( offers ){
    //debugger;//pausa la ejecucion funciona como breakpoint
    var dealContainer = document.getElementsByClassName('deals-container')[0];//obtiene el primer elemento de la pagina
    var listContainer = document.getElementById('deal-list-container');//for(var i=0; i < offers.length; i++) obtiene el elemento con el id especificadio en caso de que hayya mas de uno traera el  primero
    document.getElementById('deal-list-container').innerHTML = "";
    for(var i in offers){
        var newDeal = dealContainer.cloneNode(true);// clona o hace una copia en profundidad(osea todos los hijos) del contenedor 
        newDeal.getElementsByClassName('deal-id')[0].innerText = offers[i].id;
        newDeal.getElementsByClassName('deal-name')[0].innerText = offers[i].Name;
        newDeal.getElementsByClassName('deal-location')[0].innerText = offers[i].providerId;
        newDeal.getElementsByClassName('deal-price')[0].innerText = offers[i].price;
        newDeal.getElementsByClassName('deal-description')[0].innerText = offers[i].description;//cargo los datos de las ofertas

        newDeal.style.display = 'inline-block';//seteo visible el contenedor
        listContainer.appendChild(newDeal);// inserto la oferta en el contenedor 'deal-list-container'
    }
}

function loadOffersJquery(){
    var $dealContainer = $('.deals-container');//obtiene todos los elementos de la clase .deals-container
    var $listContainer = $('#deal-list-container'); // asigna a list container el contenedor html #deal-list-container a la variable
    $.each(offers, function(index, value){//$.each devuelve un iterador index va a ser nuestro iterador y Value va a ser nuestros Ofers
        var $newDeal = $dealContainer.clone();//hace una copia en profundidad del contenedor
        $newDeal.find('.deal-name').text(value.Name);
        $newDeal.find('.deal-location').text(value.providerId);
        $newDeal.find('.deal-price').text(value.price);
        $newDeal.find('.deal-description').text(value.description);
    
        $newDeal.css('display','inline-block');
        $listContainer.append($newDeal);
    });
      
}
// $(document).ready(function(){
//     $('.deals-container').click(function(e){
//         var dealClick = e.target;
        
//         alert(dealClick.getElementsByClassName("deal-id")[0]);
      
//       setCookie('selectDeal',$(this).attr(),1);
//     })
//   })
  
function selectDeal( elemento){
    var id = elemento.getElementsByClassName("deal-id")[0].innerText;
    setCookie('selectDeal',id,1);
    switchContent('templates/deals/deal.html');
}

getDeals();
