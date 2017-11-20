var  loadCart = function(user){
    var cart = user.cart;
    for(var i in cart){
        read("/deals/"+cart[i],loadDeals);
    }

}

var loadDeals = function ( offers ){
    var dealContainer = document.getElementsByClassName('deals-container')[0];
    var listContainer = document.getElementById('deal-list-container');   
    var newDeal = dealContainer.cloneNode(true);
    newDeal.getElementsByClassName('deal-id')[0].innerText = offers.id;
    newDeal.getElementsByClassName('deal-name')[0].innerText = offers.Name;
    newDeal.getElementsByClassName('deal-location')[0].innerText = offers.providerId;
    newDeal.getElementsByClassName('deal-price')[0].innerText = offers.price;
    newDeal.getElementsByClassName('deal-description')[0].innerText = offers.description;

    newDeal.style.display = 'inline-block';
    listContainer.appendChild(newDeal);
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