/**
* Template Name: Company
* Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });
/**
 * Function to display hexagonal figures one by one with a continuous fade-in effect
 */
/**
 * Function to display hexagonal figures one by one with a continuous fade-in effect
 */
// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
// Initialize the carousel with autoplay
const questionsCarousel = new bootstrap.Carousel('#questionsCarousel', {
  interval: 2000, // Change slide every 5 seconds
  pause: 'hover', // Pause on hover
  wrap: true // Loop the carousel
});

// Function to add the "visible" class to workflow items when they are in the viewport
function animateWorkflowItems() {
  const workflowItems = document.querySelectorAll('.workflow-item');
  workflowItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('visible');
    }
  });
}

// Add event listeners for scroll and load
window.addEventListener('scroll', animateWorkflowItems);
window.addEventListener('load', animateWorkflowItems);


// Call the displayHexagons function on page load
  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');

  if (preloader) {
    console.log('Preloader found');
  
    // Remove preloader when the page is fully loaded
    window.addEventListener('load', () => {
      console.log('Page fully loaded');
      setTimeout(() => {
        preloader.style.transition = 'opacity 0.5s';
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.remove();
          console.log('Preloader removed');
        }, 500); // Wait for the fade-out transition to complete
      }, 500); // Delay before starting the fade-out
    });
  
    // Fallback in case `window.load` fails
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM fully loaded');
      setTimeout(() => {
        preloader.style.transition = 'opacity 0.5s';
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.remove();
          console.log('Preloader removed (fallback)');
        }, 500); // Wait for the fade-out transition to complete
      }, 2000); // Extra delay for better stability
    });
  } else {
    console.log('Preloader not found');
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Function to display questions one by one with fade-in effect
   */
  function displayQuestions() {
    const questions = document.querySelectorAll('.question-item');
    let index = 0;

    function showNextQuestion() {
      if (index < questions.length) {
        questions[index].style.opacity = '1';
        index++;
        setTimeout(showNextQuestion, 2000); // Change question every 2 seconds
      }
    }

    // Initially hide all questions
    questions.forEach(q => q.style.opacity = '0');
    showNextQuestion();
  }

  // Call the displayQuestions function on page load
  window.addEventListener('load', displayQuestions);

})();
// Smooth scrolling for internal links
// Initialize the carousel with autoplay
const questionsCarousel = new bootstrap.Carousel('#questionsCarousel', {
  interval: 2000, // Change slide every 5 seconds
  pause: 'hover', // Pause on hover
  wrap: true // Loop the carousel
});
/**
 * Preloader Fix
 */




