var offersDeals = [{
      "Id": 1,
      "Name": "Lorem ipsum dolor sit amet.",
      "providerId": 1,
      "rating": 3.5,
      "price": 1500,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget.",
      "longDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, congue blandit magna nec, sagittis iaculis metus. In pulvinar consectetur diam, eget tristique risus tincidunt id. Suspendisse nec tincidunt arcu. Ut mattis lorem ut varius condimentum. Nunc at elementum leo. Nullam ut congue leo, ultrices efficitur risus. Ut vestibulum nisl in accumsan convallis. Nunc metus est, efficitur ut tristique.",
      "Details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, congue blandit magna nec, sagittis iaculis metus. In pulvinar consectetur diam, eget tristique risus tincidunt id. Suspendisse nec tincidunt arcu. Ut mattis lorem ut varius condimentum. Nunc at elementum leo. Nullam ut congue leo, ultrices efficitur risus. Ut vestibulum nisl in accumsan convallis. Nunc metus est, efficitur ut tristique.",
      "sellConditions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, congue blandit magna nec, sagittis iaculis metus. In pulvinar consectetur diam, eget tristique risus tincidunt id. Suspendisse nec tincidunt arcu. Ut mattis lorem ut varius condimentum. Nunc at elementum leo. Nullam ut congue leo, ultrices efficitur risus. Ut vestibulum nisl in accumsan convallis. Nunc metus est, efficitur ut tristique."
}];

function LoadOfferDatails(){
      document.getElementsByClassName('Deals-Details-Name')[0].innerText = offersDeals[0].Name;
      document.getElementsByClassName('Deals-Details-Price')[0].innerText = offersDeals[0].price;
      document.getElementsByClassName('Deals-Details-Description')[0].innerText = offersDeals[0].description;
}

LoadOfferDetails();