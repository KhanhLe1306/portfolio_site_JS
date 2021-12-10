// MENU SHOW WHILE HIDDEN

const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

//   MENU SHOW
navToggle.addEventListener("click", () => {
	navMenu.classList.add("show-menu");
});

// MENU HIDDEN
navClose.addEventListener("click", () => {
	navMenu.classList.remove("show-menu");
});

// HIDE MENU WHENEVER USER CLICK ON EACH LINK

const navLinks = document.querySelectorAll(".nav__link");
const linkAction = () => {
	navMenu.classList.remove("show-menu");
};
navLinks.forEach((link) => link.addEventListener("click", linkAction));

// Skills
const skillArrows = document.querySelectorAll(".skill__arrow");
skillArrows.forEach((a) => {
	a.addEventListener("click", () => {
		let classList = a.parentNode.parentNode.classList;
		if (classList.contains("skills__open")) {
			classList.remove("skills__open");
			classList.add("skills__close");
		} else {
			classList.remove("skills__close");
			classList.add("skills__open");
		}
	});
});

// ACTIVE MODEL
const modelViews = document.querySelectorAll(".services__model"),
	modelBtns = document.querySelectorAll(".services__button"),
	modelCloses = document.querySelectorAll(".services__model-close");

const showModel = (modelClicked) => {
	modelViews[modelClicked].classList.add("active__model");
};

const hideModel = (modelIndex) => {
	modelViews[modelIndex].classList.remove("active__model");
};

modelBtns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		showModel(i);
	});
});

modelCloses.forEach((modelClose, i) => {
	modelClose.addEventListener("click", () => {
		hideModel(i);
	});
});

var swiper = new Swiper(".mySwiper", {
	cssMode: true,
	navigation: {
		nextEl: ".swiper-next",
		prevEl: ".swiper-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	mousewheel: true,
	keyboard: true,
});

var testimonialSwiper = new Swiper(".swiper-testimonial", {
	loop: true,
	grabCursor: true,
	spaceBetween: 48,
	pagination: {
		el: ".swiper-pagination-testimonial",
		dynamicBullets: true,
		clickable: true
	},
	breakpoints: {
		568: {
			slidesPerView: 2,
		}
	}
});


// Show active link when scrolling

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const offsetY = window.pageYOffset;
	sections.forEach(current => {
		const offsetTop = current.offsetTop - 50;
		const sectionOffset = current.offsetHeight;
		const sectionId = current.getAttribute('id');

		if (offsetY > offsetTop && offsetY <= offsetTop + sectionOffset) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link');
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link');
		}
	})
}

window.addEventListener('scroll', scrollActive);

//Show shadow at bottom screen when scroll over the home section
const addBoxShadowHeader = () => {
	if (window.pageYOffset > 80) {
		document.querySelector('.header').classList.add('shadow_box');
	} else {
		document.querySelector('.header').classList.remove('shadow_box');
	}
}

window.addEventListener('scroll', addBoxShadowHeader)

//Show scroll up icon when window is at "about" section or below

const showScrollUp = () => {
	if (window.scrollY > 100) {
		document.querySelector('.scroll__up').classList.add('scrollup__active');
	} else {
		document.querySelector('.scroll__up').classList.remove('scrollup__active');
	}
}

window.addEventListener('scroll', showScrollUp)