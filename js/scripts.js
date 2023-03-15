/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

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

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

let url = "https://docs.google.com/forms/u/2/d/e/1FAIpQLScHwJxMsfQ84ZSgiIfL-wTIoB2LjT5skWn8zLZnH0Kt6iBQRg/formResponse"; //action url
let form = document.querySelector("#form"); //form element

form.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent default behaviour

  fetch(url, {
      method: "POST",
      mode: "no-cors",
      header: {
        'Content-Type': 'application/json'
      },
      body: getInputData()
    })
    .then(data => {
      console.log(data);
      alert("Thank you for submitting your information.");
    })
    .catch(err => console.error(err));
});

//populating input data
function getInputData() {
  let dataToPost = new FormData(); //formdata API

  //fill name attributes to corresponding values
  dataToPost.append("entry.1482118939", document.querySelector("#lastname").value);
  dataToPost.append("entry.1035138484", document.querySelector("#firstname").value);
  dataToPost.append("entry.902654349", document.querySelector("#email").value);
  dataToPost.append("entry.1536226527", document.querySelector("#inputInterest").value);
  dataToPost.append("entry.1968511952", document.querySelector("#inputAdults").value);
  dataToPost.append("entry.1229427373", document.querySelector("#inputChildren").value);
  dataToPost.append("entry.1580569942", document.querySelector("#inputDietary").value);
  dataToPost.append("entry.934207906", document.querySelector("#inputBus").value);

  return dataToPost;
}
