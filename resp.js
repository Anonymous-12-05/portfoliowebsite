burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navList')
burger.addEventListener('click',()=>{
    navlist.classList.toggle('vclass')
    navbar.classList.toggle('hnav')

})