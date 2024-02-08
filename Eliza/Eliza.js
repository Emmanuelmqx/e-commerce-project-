'use strict';
const home = document.querySelector('.home')
const shop = document.querySelector('.shop')
const pages = document.querySelector('.pages')
const blog = document.querySelector('.blog')
const parent = document.querySelector('.for-btn')

const product_img = document.querySelector('.product-img')
const ratings_btn = document.querySelector('.ratings-btn')

home.addEventListener('mouseenter', function(){
    parent.classList.toggle('active1')
})
// home.addEventListener('mouseleave', function(){
//     parent.classList.remove('active1')
// })
shop.addEventListener('mouseenter', function(){
    parent.classList.toggle('active2')
})
pages.addEventListener('mouseenter', function(){
    parent.classList.toggle('active3')
})
blog.addEventListener('mouseenter', function(){
    parent.classList.toggle('active4')
})

for(let i = 0; i < product_img.length; i++){
    product_img[i].addEventListener('click', function (){
        ratings_btn[i].classList.add('active-rating')
    })
}
for(let i = 0; i < product_img.length; i++){
    product_img[i].addEventListener("mouseleave", function (){
        ratings_btn[i].classList.remove('active-rating')
    })
}