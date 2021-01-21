//---------------------------------menu------------------------------------------------//
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }


        });
        burger.classList.toggle('toggle');
    });


}
navSlide();
//---------------------------------Cambio de Color Menu------------------------------------------------//
window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;

    nav.classList.toggle('scrolling-active', windowPosition);
  })
  //---------------------------------Animacion Divs------------------------------------------------//
  let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop =
    document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++ ) {
        let alturaAnimado = animado[i].offsetTop;

        if(alturaAnimado - 300 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }

    }
}

window.addEventListener('scroll', mostrarScroll);