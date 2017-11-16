

function getDeals(order,category){
    switch (order) {
        case "Price":
            read("/deals?_sort=price&_order=ASC", loadOffers );
            break;
        case "MostViews":
            read("/deals?_sort=views&_order=DESC", loadOffers);
            break;
        case "Categories":
            read("/deals?category_like="+category, loadOffers);
            
        
        default:
            read("/deals?_sort=rating&_order=DESC", loadOffers );
        break;
    }
        
}
function selectOrder(){
    var order = document.getElementById("order").value;
    getDeals(order);

}

// function modificarCarrito(carrito){

//     var productId = document.getElementsByClassName('offer-detail-name');
//     update("/carts/",carrito) 
// }



var loadOffers = function ( offers ){
    //debugger;//pausa la ejecucion funciona como breakpoint
    if(offers.length > 0){
        document.getElementById('deal-list-container').style.display ="inline-block";    
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
    else{
        document.getElementById('deal-list-container').style.display ="none";
        swal({
            title: "No hay ofertas para mostrar",
            icon: "warning",
        });
    }
}

function selectDeal( elemento){
    var id = elemento.getElementsByClassName("deal-id")[0].innerText;
    setCookie('selectDeal',id,1);
    switchContent('templates/deals/deal.html');
}

getDeals();
