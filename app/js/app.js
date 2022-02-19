//"use strict"
// Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')


 const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  breakpointsBase: 'container',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});



//////Определяем тип устройства-моб или пк
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

document.addEventListener("DOMContentLoaded", () => {
  //мЕНЮ БУРГЕР
  const iconMenu = document.querySelector(".menu__icon");
  const menuBody = document.querySelector(".top-nav__nav");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });

  //Поиск
  const iconSearch = document.querySelector(".search-img");
  iconSearch.addEventListener("click", function (e) {
    iconSearch.classList.toggle("_active");
  });

  //Подменю
  const subnavLinks = document.querySelectorAll(".top-nav__subnav");
  if (subnavLinks.length > 0) {
    subnavLinks.forEach((subnavLink) => {
      subnavLink.addEventListener("click", function (e) {
        subnavLink.classList.toggle("_active");
      });
    });
  }

  //Табы
  const tabTitles = document.querySelectorAll(".tab__title");
  const tabImages = document.querySelectorAll(".tab__img");
  if (tabTitles.length > 0) {
    tabTitles.forEach((tabTitle) => {
      tabTitle.addEventListener("click", tabClick);

      function tabClick(e) {
        //удаляем класс active у всех заголовков
        for (let index = 0; index < tabTitles.length; index++) {
          const element = tabTitles[index];
          if (element.classList.contains("_active")) {
            element.classList.remove("_active");
          }
        }

        //удаляем класс active у всех табов
        for (let index = 0; index < tabImages.length; index++) {
          const element = tabImages[index];
          if (element.classList.contains("_active")) {
            element.classList.remove("_active");
          }
        }

        const tabTitle = e.target;

        const tabsPaneTarget = document.querySelector(
          tabTitle.getAttribute("href")
        );
        const iconLive = document.querySelector('.icon__live');
        const streamActive = tabTitle.firstElementChild;
        // console.log(iconLive);
        // console.log(streamActive);
        if (streamActive.classList.contains('stream_active')) {
          iconLive.classList.add("_active");
        } else {
          iconLive.classList.remove("_active");
        }

        tabsPaneTarget.classList.add("_active");
        tabTitle.classList.add("_active");
      }
    });
  }



  //Прокрутка при клике
  //   const menuLinks = document.querySelectorAll('.header-nav__link[data-goto]');
  //   if(menuLinks.length>0){
  // 	menuLinks.forEach(menuLink => {
  // 	  menuLink.addEventListener("click", onMenuLinkClick);
  // 	});

  // 	function onMenuLinkClick(e){

  // 	  const menuLink = e.target;
  // 	  console.log(menuLink);
  // 	  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
  // 		const gotoBlock=document.querySelector(menuLink.dataset.goto);
  // 		const gotoBlockValue=gotoBlock.getBoundingClientRect().top + pageYOffset-document.querySelector('.header').offsetHeight;

  // 		if (iconMenu.classList.contains('_active')){
  // 		  document.body.classList.remove('_lock');
  // 		  iconMenu.classList.remove('_active');
  // 		  menuBody.classList.remove('_active');
  // 		}

  // 		window.scrollTo({
  // 		  top: gotoBlockValue,
  // 		  behavior: "smooth"
  // 		});
  // 		e.preventDefault();
  // 	  }
  // 	}
  //   }
});