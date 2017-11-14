


function loadNavbar(loged){
    if(loged){
        document.getElementById('cartNav').hidden = false;
        document.getElementById('logout').hidden = false;
        document.getElementById('deal').hidden = false;
        document.getElementById('login').hidden = true;
        document.getElementById('signup').hidden = true;
        document.getElementById('novelty').hidden = true;
        
    }else{
        document.getElementById('cartNav').hidden = true;
        document.getElementById('logout').hidden = true;
        document.getElementById('deal').hidden = true;
        document.getElementById('login').hidden = false;
        document.getElementById('signup').hidden = false;
        document.getElementById('novelty').hidden = false;
        
    }
}
var loged = getCookie('isLogged');
loadNavbar(loged);
