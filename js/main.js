const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})

hamburger.addEventListener('click', function () 
{
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})


