fetch('./header.html')
  .then((response) => {
    return response.text()
  })
  .then((data) => {
    /* Inner header */
    document.querySelector('header').innerHTML = data

    /* Responsive navbar MENU */
    const hamburger = document.querySelector('.hamburger')
    const topnav = document.querySelector('.topnav')
    const navLink = document.querySelectorAll('.nav-link')

    hamburger.addEventListener('click', mobileMenu)
    navLink.forEach((n) => n.addEventListener('click', closeMenu))

    function mobileMenu() {
      hamburger.classList.toggle('active')
      topnav.classList.toggle('active')
    }

    function closeMenu() {
      hamburger.classList.remove('active')
      topnav.classList.remove('active')
    }
  })

fetch('./footer.html')
  .then((response) => {
    return response.text()
  })
  .then((data) => {
    /* Inner header */
    document.querySelector('footer').innerHTML = data
  })

fetch('./section-contact-us.html')
  .then((response) => {
    return response.text()
  })
  .then((data) => {
    /* Inner 'Contact us' section */
    const element = document.querySelector('.contactus-section')
    if (!!element) {
      return (element.innerHTML = data)
    }
  })

fetch('./section-more-for-you.html')
  .then((response) => {
    return response.text()
  })
  .then((data) => {
    /* Inner 'More for you' section */
    const element = document.querySelector('.more-for-you')
    if (!!element) {
      return (element.innerHTML = data)
    }
  })

fetch('./section-faq.html')
  .then((response) => {
    return response.text()
  })
  .then((data) => {
    /* Inner 'FAQ section */
    const element = document.querySelector('.section-faq')
    if (!!element) {
      return (element.innerHTML = data)
    }
  })

/* SLIDER */
let swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
