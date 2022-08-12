// const shopItem = document.querySelector('.shop__list');

// const DATA = [
//     {
//         id: 1,
//         image: '../media/png/funkin.png',
//         title: 'Bottle',
//         reviews: '../media/svg/black-star.svg',
//         num: '(32 reviews)',
//         price: '$35.59',
//         cta: 'Shop Now'
//     },
//     {
//         id: 2,
//         image: '../media/png/funkin.png',
//         title: 'Bottle',
//         reviews: '../media/svg/black-star.svg',
//         num: '(32 reviews)',
//         price: '$35.59',
//         cta: 'Shop Now'
//     },
//     {
//         id: 3,
//         image: '../media/png/funkin.png',
//         title: 'Bottle',
//         reviews: '../media/svg/black-star.svg',
//         num: '(32 reviews)',
//         price: '$35.59',
//         cta: 'Shop Now'
//     },
//     {
//         id: 4,
//         image: '../media/png/funkin.png',
//         title: 'Bottle',
//         reviews: '../media/svg/black-star.svg',
//         num: '(32 reviews)',
//         price: '$35.59',
//         cta: 'Shop Now'
//     },
//     {
//         id: 5,
//         image: '../media/png/funkin.png',
//         title: 'Bottle',
//         reviews: '../media/svg/black-star.svg',
//         num: '(32 reviews)',
//         price: '$35.59',
//         cta: 'Shop Now'
//     },
// ]

// let num = 5;
// let product = '';

// console.log(DATA)

// function renderProductsToDOM(){
//     DATA.map(({id, image, title, reviews, num, price, cta}) => {
//         product = `
//         <div class="shop__item">
//             <div key=${id} class="shop__item--wrapper">
//         <img class="shop__image" src=${image} alt="funkin">
//         <div class="shop__item--box">
//         <h3 class="shop__subtitle">${title}</h3>
//         <ul class="shop__stars">
//         <li class="shop__star">
//             <img class="shop__star--image" src=${reviews} alt="black">
//         </li>
//         <li class="shop__star">
//             <img class="shop__star--image" src=${reviews} alt="black">
//         </li>
//         <li class="shop__star">
//             <img class="shop__star--image" src=${reviews} alt="black">
//         </li>
//         <li class="shop__star">
//             <img class="shop__star--image" src=${reviews} alt="black">
//         </li>
//         <li class="shop__star">
//             <img class="shop__star--image" src=${reviews} alt="black">
//         </li>
//         <li>
//             ${num}
//         </li>
//         </ul>
//         <p class="shop__item--price">${price}</p>
//         <a class="shop__item--cta" href="#">${cta}</a>
//         </div>
//     </div>
//         </div>
//         ` 
//     })
//     shopItem.append(product);
// }

// renderProductsToDOM();
