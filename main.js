const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navCLose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navCLose){
    navCLose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*remove from mobile*/ 
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

const skillsContent = document.getElementsByClassName('skills__content'),
     skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
    
}
skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


const modalViews =  document.querySelectorAll('.services__modal'),
      modalBtns =  document.querySelectorAll('.services__button'),
      modalCloses =  document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click',() =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
} )

/*swiper*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    // Optional parameters
   cssMode:true,
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    

});
let swiperPortfolio1 = new Swiper('.portfolio__container', {
    
   breakpoints:{
        0:{
            slidesPerView: 1,
        },
        500:
        {
            slidesPerView: 2,
        }
    }
    

});
/*testimonial*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    // Optional parameters
    
    grabCursor: true,
    spaceBetween: 48,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   /*If we need pagination*/
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    breakpoints:{
        568:{
            slidesPerView: 1,
        }
        
    },
    

});


/* scroll section active link*/
let mybutton = document.getElementById("myBtn");

window.onscroll = function()
{ scrollFunction() };

function scrollFunction()
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        mybutton.style.display = "block";
    }
    else
    {
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var typed = new Typed('#element', {
    strings: ['Engineer','Frontend Developer','a passionate web developer'],
    typeSpeed: 50,

});

/*=====dark button====*/
var icon = document.getElementById("icon");

icon.onclick = function(){
 document.body.classList.toggle("dark-theme");
 this.classList.toggle('bi-moon');
 
 

}

icon.addEventListener('click', function(){
    const body=document.querySelector('body');
    body.style.transition= '2s';
})

 
