'use strict';
const item_top = document.querySelector('.item-top')
const toggle_btn = document.getElementById('itemi')
const home = document.querySelector('.home')
const shop = document.querySelector('.shop')
const pages = document.querySelector('.pages')
const blog = document.querySelector('.blog')
const parent = document.querySelector('.for-btn')
const border = document.getElementById('border')
const bx_menu = document.querySelector('.bx-menu')
const item_flex = document.querySelector('.item-flex')
// const now = document.querySelector('.now')
const product1 = document.querySelector('.product1')

const product_img = document.querySelector('.product-img')
const ratings_btn = document.querySelector('.ratings-btn')

home.addEventListener('mouseenter', function(){
    parent.classList.toggle('active1')
})
shop.addEventListener('mouseenter', function(){
    parent.classList.toggle('active2')
})
pages.addEventListener('mouseenter', function(){
    parent.classList.toggle('active3')
})
blog.addEventListener('mouseenter', function(){
    parent.classList.toggle('active4')
})
home.addEventListener('mouseleave', function(){
    parent.classList.remove('active1')
})
shop.addEventListener('mouseleave', function(){
    parent.classList.remove('active2')
})
pages.addEventListener('mouseleave', function(){
    parent.classList.remove('active3')
})
blog.addEventListener('mouseleave', function(){
    parent.classList.remove('active4')
})


toggle_btn.addEventListener('click', function() {
    item_top.classList.toggle('active5')
})

border.addEventListener('click', function () {
    item_top.classList.remove('second-options')
    item_top.classList.add('first-option')
    item_flex.classList.remove('reds')
    item_flex.classList.add('red')
})

bx_menu.addEventListener('click', function() {
    item_top.classList.remove('first-option')
    item_top.classList.add('second-options')
    item_flex.classList.remove('red')
    item_flex.classList.add('reds')
})


for(let i = 0; i > product1.length; i++){
    product1[i].addEventListener('mouseenter', function (){
        product1[i].classList.add('activee')
    })
}
for(let i = 0; i < product1.length; i++){
    product1[i].addEventListener('mouseleave', function (){
        product1[i].classList.remove('activee')
    })
}
// product1.addEventListener('mouseenter', function() {
//     product1.classList.add('activee')
// })
// product1.addEventListener('mouseleave', function() {
//     product1.classList.remove('activee')
// })