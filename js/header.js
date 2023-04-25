let scrollPosition = window.pageYOffset;
          window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (scrollPosition > currentScrollPos) {
              document.querySelector(".site-header").classList.add("visible");
            } else {
              document.querySelector(".site-header").classList.remove("visible");
            }
            scrollPosition = currentScrollPos;
          }