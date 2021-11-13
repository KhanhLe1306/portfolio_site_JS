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
