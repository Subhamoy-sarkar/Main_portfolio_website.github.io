let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        event.preventDefault();
        alert('Please fill out all fields.');
    }
});



const sr=ScrollReveal({
    distance: '60px',
    duration:1000,
    reset:true
})
sr.reveal('.home-text , .home-img  , .services , .cta , .resume , .contact ',{delay:100,origin:'top'})

sr.reveal('.about-img',{delay:100,origin:'left'})
sr.reveal('.about-text',{delay:100,origin:'right'})


