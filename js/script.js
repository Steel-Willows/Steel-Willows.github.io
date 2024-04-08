(function($) {
	
	"use strict";

  /* Mobile Menu */
  var MobileMenu = function() {

      var toggleButton = $('.header-menu-toggle'),
          nav = $('.header-nav-wrap');

      toggleButton.on('click', function(event){
          event.preventDefault();

          toggleButton.toggleClass('is-clicked');
          nav.slideToggle();
      });

      if (toggleButton.is(':visible')) nav.addClass('mobile');

     
      nav.find('a').on("click", function() {

          if (nav.hasClass('mobile')) {
              toggleButton.toggleClass('is-clicked');
              nav.slideToggle(); 
          }
      });

  };

  $(document).ready(function () {
    MobileMenu();    
  });

  window.addEventListener("load", function () {
    /* Preloader */
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hide-preloader");
  });

})(window.jQuery);