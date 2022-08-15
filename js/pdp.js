new Swiper(".product-details__swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".product-details__pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".product-details__right",
      prevEl: ".product-details__left"
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

  new Swiper(".benefits__elements", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".benefit__paginations",
      clickable: true
    },
    // navigation: {
    //   nextEl: ".product-details__right",
    //   prevEl: ".product-details__left"
    // },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });

  new Swiper(".box__carousel", {
    slidesPerView: 1,
    spaceBetween: 0,
    // pagination: {
    //   el: ".benefit__paginations",
    //   clickable: true
    // },
    // navigation: {
    //   nextEl: ".product-details__right",
    //   prevEl: ".product-details__left"
    // },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });


var acc = document.getElementsByClassName("accordion");
var i;
  
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}