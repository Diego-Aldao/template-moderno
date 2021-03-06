document.addEventListener("DOMContentLoaded", function () {
  //CONFIGURACION SWIPER HEADER
  var mySwiper = new Swiper(".swiper-container", {
    // PARAMETROS OPCIONALES
    direction: "horizontal",
    speed: 3000,
    parallax: true,
    loop: false,
    //PARA PROBAR -> effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    // PAGINACION(PUNTITOS)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // FLECHAS DE NAVEGACION
    /*navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },*/

    // SCROLLBAR
    /*scrollbar: {
      el: ".swiper-scrollbar",
    },*/
  });

  //CONFIGURACION SWIPER TESTIMONIOS
  var swiper = new Swiper(".swiper-contenedor", {
    spaceBetween: 0,
    speed: 1500,
    centeredSlides: true,
    parallax: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-puntitos",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //API INTERSECTION OBSERVER PARA LOS EFECTOS DE LOS SPAN Y LAZY LOADING
  //USO DE LA API EN VEZ DE EVENTLISTENER SCROLL PARA QUE SOLO ACTUE CUANDO ENTRA A LA VISTA
  const secciones = document.querySelectorAll(".intersectionObserver");

  const options = {
    root: null, //es el default, todo el viewport
    threshold: 0.5, // 0 dispara en el momento que el elemento entra al observador, 1 dispara cuando todo el elemento ya esta dentro del observador
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } //si no esta en la pantalla, termina la funcion
      entry.target.classList.add("derecha");
    });
  }, options);
  secciones.forEach((section) => {
    observer.observe(section); //al usar querySelectorAll tengo un array con las secciones, y lo que quiero lograr es observar uno por uno
  });

  //INTERACCION MENU-DESPLEGABLE
  const botonAbrir = document.querySelector(".boton-abrir");
  const botonCerrar = document.querySelector(".boton-cerrar");
  const menuDesplegable = document.querySelector(".menu-desplegable");
  const cruzUno = document.querySelector(".cruz");
  const cruzDos = document.querySelector(".cruz-02");

  botonAbrir.addEventListener("click", function abrir() {
    menuDesplegable.style.right = "0px";

    if ((cruzUno.style.transform = "rotate(0)")) {
      cruzUno.style.transform = "rotate(135deg)";
      cruzDos.style.transform = "rotate(-135deg)";
      //RESETEO DE VALORES POR SI EL MENU SE ABRE MAS DE UNA VEZ
    }
  });

  botonCerrar.addEventListener("click", function cerrar() {
    menuDesplegable.style.right = "-100%";
    cruzUno.style.transform = "rotate(0)";
    cruzDos.style.transform = "rotate(0)";
  });

  //INTERACCION LINKS MENU-DESPLEGABLE
  const links = document.querySelectorAll(".links");
  links.forEach((link) => {
    link.addEventListener("click", function irA() {
      menuDesplegable.style.right = "-100%";
    });
  });
});
