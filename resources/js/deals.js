
var offers = [{
            "Id": 1,
            "Name": "Lorem ipsum dolor sit amet.",
            "providerId": 1,
            "rating": 3.5,
            "price": 1500,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget.",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, congue blandit magna nec, sagittis iaculis metus. In pulvinar consectetur diam, eget tristique risus tincidunt id. Suspendisse nec tincidunt arcu. Ut mattis lorem ut varius condimentum. Nunc at elementum leo. Nullam ut congue leo, ultrices efficitur risus. Ut vestibulum nisl in accumsan convallis. Nunc metus est, efficitur ut tristique.",
            "Details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, congue blandit magna nec, sagittis iaculis metus. In pulvinar consectetur diam, eget tristique risus tincidunt id. Suspendisse nec tincidunt arcu. Ut mattis lorem ut varius condimentum. Nunc at elementum leo. Nullam ut congue leo, ultrices efficitur risus. Ut vestibulum nisl in accumsan convallis. Nunc metus est, efficitur ut tristique.",
            "sellConditions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, congue blandit magna nec, sagittis iaculis metus. In pulvinar consectetur diam, eget tristique risus tincidunt id. Suspendisse nec tincidunt arcu. Ut mattis lorem ut varius condimentum. Nunc at elementum leo. Nullam ut congue leo, ultrices efficitur risus. Ut vestibulum nisl in accumsan convallis. Nunc metus est, efficitur ut tristique."
        },
        {
            "Id": 2,
            "Name": "Lorem ipsum dolor sit amet.",
            "providerId": 2,
            "rating": 4,
            "price": 1500,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget.",
            "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, congue blandit magna nec, sagittis iaculis metus. In pulvinar consectetur diam, eget tristique risus tincidunt id. Suspendisse nec tincidunt arcu. Ut mattis lorem ut varius condimentum. Nunc at elementum leo. Nullam ut congue leo, ultrices efficitur risus. Ut vestibulum nisl in accumsan convallis. Nunc metus est, efficitur ut tristique.",
            "Details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, congue blandit magna nec, sagittis iaculis metus. In pulvinar consectetur diam, eget tristique risus tincidunt id. Suspendisse nec tincidunt arcu. Ut mattis lorem ut varius condimentum. Nunc at elementum leo. Nullam ut congue leo, ultrices efficitur risus. Ut vestibulum nisl in accumsan convallis. Nunc metus est, efficitur ut tristique.",
            "sellConditions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, congue blandit magna nec, sagittis iaculis metus. In pulvinar consectetur diam, eget tristique risus tincidunt id. Suspendisse nec tincidunt arcu. Ut mattis lorem ut varius condimentum. Nunc at elementum leo. Nullam ut congue leo, ultrices efficitur risus. Ut vestibulum nisl in accumsan convallis. Nunc metus est, efficitur ut tristique."
        }];
function getDeals(){

    var deals = read("/deals", loadOffers );
    
    console.log(deals);

}

function modificarCarrito(carrito){

    var productId = document.getElementsByClassName('offer-detail-name');
    update("/carts/",carrito,) 
}



var loadOffers = function ( offers ){
    //debugger;//pausa la ejecucion funciona como breakpoint
    var dealContainer = document.getElementsByClassName('deals-container')[0];//obtiene el primer elemento de la pagina
    var listContainer = document.getElementById('deal-list-container');//for(var i=0; i < offers.length; i++) obtiene el elemento con el id especificadio en caso de que hayya mas de uno traera el  primero
    for(var i in offers){
        //Clones the DOM node, takes a deep copy paramenter in order to clone all the descendant nodes
        var newDeal = dealContainer.cloneNode(true);// clona o hace una copia en profundidad(osea todos los hijos) del contenedor 
        newDeal.getElementsByClassName('deal-id')[0].innerText = offers[i].Id;
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

function selectDeal(){
    $('.deals-container').click(function(e){
        var id = e.target.value;
        setCookie("selectDeals",id,1);
    });
    switchContent('templates/deals/deal.html');
}

getDeals();
// loadOffers();