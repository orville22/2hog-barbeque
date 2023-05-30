// ADDING IMAGES IN GALLERY
const imgFileNames = [];

function populateImgFiles() {
  for (let i = 20; i < 90; i++) {
    imgFileNames.push(`img_0${i}.jpg`);
  }
}

function addImages() {
  const galleryBox1 = document.querySelector(".gallery-row--1");
  const galleryBox2 = document.querySelector(".gallery-row--2");

  imgFileNames.forEach((fileName, i) => {
    const container = document.createElement("div");
    container.classList.add("image-container");

    const image = document.createElement("img");
    image.src = `/assets/images/gallery/customers/${fileName}`;
    image.classList.add("gallery__image");
    image.setAttribute("draggable", "false");

    i < imgFileNames.length / 2
      ? galleryBox1.appendChild(container)
      : galleryBox2.appendChild(container);

    container.appendChild(image);
  });
}

populateImgFiles();
addImages();

// SMOOTH SCROLLING
const navItems = document.querySelectorAll('.navigation__item');

function smoothScroll() {
  navItems.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");

      if (href === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// NAV ANIMATION
const hamburger = document.querySelector('#hamburger');
const spans = document.querySelectorAll('#span1, #span2, #span3');
const navParent = document.querySelector('.navigation');

function toggleClassDelay(el, classList) {
  [...el].reverse().forEach((el, index) => {
    setTimeout(() => {
      el.classList.toggle(classList);
    }, index * 100);
  });
}

function toggleHamburger() {
  spans.forEach((span) => {
    span.classList.toggle('open');
  });
  navParent.classList.toggle('open');
}

hamburger.addEventListener('click', () => {
  toggleHamburger();
  toggleClassDelay(navItems, 'items-open');
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleHamburger();
    toggleClassDelay(navItems, 'items-open');
    smoothScroll();
  });
});

// STICKY NAV
const header = document.querySelector('.header');

function callback(entries) {
  const ent = entries[0];

  if (!ent.isIntersecting) {
    document.body.classList.add('sticky');
  }
}

const obs = new IntersectionObserver(callback, { root: null, threshold: 0 });
obs.observe(header);

// ONLINE ORDER ARROWS
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const orderGroup1 = document.querySelector('.order-group-1');
const orderGroup2 = document.querySelector('.order-group-2');

arrowLeft.addEventListener('click', () => {
  orderGroup1.style.display = 'block';
  orderGroup2.style.display = 'none';
  arrowLeft.style.display = 'none';
  arrowRight.style.display = 'block';
});

arrowRight.addEventListener('click', () => {
  orderGroup1.style.display = 'none';
  orderGroup2.style.display = 'block';
  arrowLeft.style.display = 'block';
  arrowRight.style.display = 'none';
});

function updateOrderGroupVisibility() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (viewportWidth >= 480) {
    orderGroup1.style.display = 'block';
    orderGroup2.style.display = 'block';
    arrowLeft.style.display = 'none';
    arrowRight.style.display = 'none';
  } else if (viewportWidth <= 480) {
    if (orderGroup2.style.display === 'block') {
      orderGroup1.style.display = 'block';
      orderGroup2.style.display = 'none';
      arrowRight.style.display = 'block';
    } else if (orderGroup2.style.display === 'none') {
      arrowLeft.style.display = 'none';
      arrowRight.style.display = 'block';
    }
  }
}

window.addEventListener('resize', updateOrderGroupVisibility);

// COPYRIGHT DATE
const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = currentYear;
