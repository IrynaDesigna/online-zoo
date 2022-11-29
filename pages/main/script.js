;(function () {
  "use strict";

  const closeNav = document.getElementById('close-nav'),
        navMenu = document.getElementById('nav-screen');

  closeNav.addEventListener('click',closeNavMenu);

  function closeNavMenu(el) {
    closeNav.classList.toggle('close-nav');
    navMenu.classList.toggle('small-screen');

  }

})();
