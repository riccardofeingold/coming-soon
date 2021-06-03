/*!
* Start Bootstrap - New Age v6.0.0 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function updateLinkyMemberNum() {
  var num = Number(document.getElementById("linky-members").innerHTML);
  num += 1;

  document.getElementById("linky-members").innerHTML = num;

  document.getElementById("mc-embedded-subscribe-form").style.display = 'none';

  document.getElementById("fat-header-title").innerHTML = "Thank You!"
  document.getElementById("fat-header-title").style.textAlign = 'center';

  document.getElementById("becoming-linky-member-text").innerHTML = "Best Regards, Linky Team";
  document.getElementById("becoming-linky-member-text").style.textAlign = 'center';
  document.getElementById("becoming-linky-member-num").style.display = 'none';
}
