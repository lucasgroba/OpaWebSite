var  loadCart = function(user){
    var cart = user.cart;
    for(var i in cart){
        read("/deals/"+cart[i],loadDeals);
    }

}

var loadDeals = function ( offers ){
    //debugger;//pausa la ejecucion funciona como breakpoint
    var dealContainer = document.getElementsByClassName('deals-container')[0];//obtiene el primer elemento de la pagina
    var listContainer = document.getElementById('deal-list-container');//for(var i=0; i < offers.length; i++) obtiene el elemento con el id especificadio en caso de que hayya mas de uno traera el  primero   
    var newDeal = dealContainer.cloneNode(true);// clona o hace una copia en profundidad(osea todos los hijos) del contenedor 
    newDeal.getElementsByClassName('deal-id')[0].innerText = offers.id;
    newDeal.getElementsByClassName('deal-name')[0].innerText = offers.Name;
    newDeal.getElementsByClassName('deal-location')[0].innerText = offers.providerId;
    newDeal.getElementsByClassName('deal-price')[0].innerText = offers.price;
    newDeal.getElementsByClassName('deal-description')[0].innerText = offers.description;//cargo los datos de las ofertas

    newDeal.style.display = 'inline-block';//seteo visible el contenedor
    listContainer.appendChild(newDeal);// inserto la oferta en el contenedor 'deal-list-container'
}

var  isLogged = getCookie('isLogged');
if(isLogged){
    debugger;
    var UserData = getCookie('UserData');
    alert (UserData);
    read('/users/'+UserData,loadCart)
}
else{
    switchContent('templates/account/login.html');
}