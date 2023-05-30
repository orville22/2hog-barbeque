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
    // Loop through the image filenames array
    for (let i = 0; i < imgFileNames.length; i++) {
        const container = document.createElement("div");
        container.classList.add("image-container");

        const image = document.createElement("img");
        image.src = "/assets/images/gallery/customers/" + imgFileNames[i];
        image.classList.add("gallery__image");
        image.setAttribute("draggable", "false");

        //put the first half of the images to galleryBox1
        if (i < imgFileNames.length / 2) {
            galleryBox1.appendChild(container);
            container.appendChild(image);
        } else {
            //put the second half of the images to galleryBox2
            galleryBox2.appendChild(container);
            container.appendChild(image);
        }
    }
}

populateImgFiles();
addImages();

//SMOOTH SCROLLING
const navItems = document.querySelectorAll(".navigation__item");

function smoothScroll() {
    navItems.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const href = link.getAttribute("href");

            //scroll back to top
            if (href === "#home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
            if (href !== "#home") {
                const sectionEl = document.querySelector(href);
                sectionEl.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}
smoothScroll();

//NAV ANIMATION
const hamburger = document.querySelector("#hamburger");

function toggleClassDelay(el, classList) {
    const stack = [...el].reverse();
    stack.forEach((el, index) => {
        setTimeout(() => {
            el.classList.toggle(classList);
        }, index * 100);
    });
}

function toggleHamburger() {
    const spans = document.querySelectorAll("#span1, #span2, #span3");
    const navParent = document.querySelector(".navigation");
    spans.forEach((span) => {
        span.classList.toggle("open");
    });
    navParent.classList.toggle("open");
}

hamburger.addEventListener("click", () => {
    toggleHamburger();
    toggleClassDelay(navItems, "items-open");
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        toggleHamburger();
        toggleClassDelay(navItems, "items-open");
        smoothScroll();
    });
});

//sticky nav
const header = document.querySelector(".header");

function callback(entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
    }
    if(ent.isIntersecting) {
        document.body.classList.remove("sticky");
    }
}
const options = {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
};
const obs = new IntersectionObserver(callback, options);

obs.observe(header);

//copyright date
const currentYear = new Date().getFullYear();
const copyrightYear = document.getElementById("copyright-year");

copyrightYear.textContent = currentYear;
