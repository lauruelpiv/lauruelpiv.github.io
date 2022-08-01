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

let url = "https://docs.google.com/forms/d/e/1FAIpQLSfmTINjVDjWp4cbiNnYDOEbJHeSz3uHz5Rr7wOR0428UZZVnw/formResponse"; //action url
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
  dataToPost.append("entry.1368813240", document.querySelector("#lastname").value);
  dataToPost.append("entry.1391295615", document.querySelector("#firstname").value);
  dataToPost.append("entry.1848296828", document.querySelector("#email").value);
  dataToPost.append("entry.1761747136", document.querySelector("#inputAddress").value);
  dataToPost.append("entry.593898036", document.querySelector("#inputAddress2").value);
  dataToPost.append("entry.341827945", document.querySelector("#inputCity").value);
  dataToPost.append("entry.1413999866", document.querySelector("#inputZip").value);
  dataToPost.append("entry.867917125", document.querySelector("#inputCountry").value);
  dataToPost.append("entry.1433709179", document.querySelector("#inputInterest").value);
  dataToPost.append("entry.59073892", document.querySelector("#inputAdults").value);
  dataToPost.append("entry.1158705370", document.querySelector("#inputChildren").value);

  return dataToPost;
}
