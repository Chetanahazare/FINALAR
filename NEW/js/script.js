document.getElementById('camera1').addEventListener('click', function() {
  window.location.href = 'https://sketchfab.com/3d-models/antique-table-f01054c29829452a9f87437de57a3f6f#download';
});

var addItemId = 0;
function addToCart(item) {
  addItemId += 1;
  var selectedItem = document.createElement('div');
  selectedItem.classList.add('cartImg');
  selectedItem.setAttribute('id',addItemId);
  var img = document.createElement('img');
  img.setAttribute('src',item.children[0].currentSrc);
  var title = document.createElement('div');
  title.innerText = item.children[1].innerText;
  var label = document.createElement('div');
  label.innerText = item.children[2].children[0].innerText;
  var select = document.createElement('span');
  select.innerText = item.children[2].children[1].value;
  label.append(select); 
  var delBtn = document.createElement('button');
  delBtn.innerText = 'DELETE';
  delBtn.setAttribute('onclick','del('+addItemId+')');
  var cartItems = document.getElementById('title');
  selectedItem.append(img);
  selectedItem.append(title);
  selectedItem.append(label);
  selectedItem.append(delBtn);
  cartItems.append(selectedItem);
}

function del(item){
  document.getElementById(item).remove();
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },

    breakpoints : {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });


var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },

    breakpoints : {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });
  