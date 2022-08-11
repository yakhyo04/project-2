const menuBtn = document.querySelector('#menu');
const hiddenMenu = document.querySelector('.header__hidden--menu');

menuBtn.addEventListener('click', () => {
    if(hiddenMenu.style.display === 'none'){
        hiddenMenu.style.display = 'block';
    }else{
        hiddenMenu.style.display = 'none';
    }
})


function myFunction(){
    document.getElementById('myDropdown').classList.toggle('show');
}

function stuffFunction(){
    document.getElementById('myFunStuff').classList.toggle('show');
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }

    if(!event.target.matches('.dropButton')){
        var dropdowns = document.getElementsByClassName('funstuff-content');
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0
    }
  }
});

new Swiper(".secondSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-paginate",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
});

new Swiper(".announcement", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
//   pagination: {
//     el: ".swiper-paginate",
//     clickable: true
//   },
  navigation: {
    nextEl: ".header__info--right",
    prevEl: ".header__info--left"
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});