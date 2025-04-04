var togglebtn = document.querySelector('.togglebtn');
var nav = document.querySelector('.navlinks');
var links = document.querySelector('.navlinks li');

togglebtn.addEventListener('click', function() {
    this.classList.toggle('click');
    nav.classList.toggle('open');
});

var typed = new Typed('.input', {
    strings: ['Web Developer', 'Competitive Programmer', 'Programming Instructor',  'Muslim'],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});


