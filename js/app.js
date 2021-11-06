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

//OPEN SKILLS OF EACH BIG SKILL
// const openArrows = document.querySelectorAll(".skill__open-icon");
// const closeArrows = document.querySelectorAll("skill__close-icon");
// const skillLists = document.querySelectorAll(".skill__lists");
// if (openArrows) {
// 	for (let i = 0; i < openArrows.length; i++) {
// 		openArrows[i].addEventListener("click", () => {
// 			skillLists[i].classList.remove("hide__skill-list");
// 			openArrows;
// 		});
// 	}
// }
// if (closeArrows) {
// 	for (let i = 0; i < closeArrows.length; i++) {
// 		closeArrows[i].addEventListener("click", () => {
// 			skillLists[i].classList.add("hide__skill-list");
// 		});
// 	}
// }

// const open_close_arrows = document.querySelectorAll("#open-close-arrow");
// const skillLists = document.querySelectorAll(".skill__lists");
// // open_close_arrows.forEach((e) => {
// // 	e.addEventListener("click", () => {
// // 		console.log("Inside");
// // 		console.log(e.classList);
// // 		if (e.classList.contains("uil-angle-down")) {
// // 			e.classList.remove("uil-angle-down");
// // 			e.classList.add("uil-angle-up");
// // 		} else {
// // 			e.classList.remove("uil-angle-up");
// // 			e.classList.add("uil-angle-down");
// // 		}
// // 	});
// // });

// for (let i = 0; i < open_close_arrows.length; i++) {
// 	open_close_arrows[i].addEventListener("click", () => {
// 		if (open_close_arrows[i].classList.contains("uil-angle-down")) {
// 			open_close_arrows[i].classList.remove("uil-angle-down");
//             open_close_arrows[i].classList.add("uil-angle-up");
//             skillLists[i].classList.remove("hide__skill-list");
// 		} else {
// 			open_close_arrows[i].classList.remove("uil-angle-up");
//             open_close_arrows[i].classList.add("uil-angle-down");
//             skillLists[i].classList.add("hide__skill-list");
// 		}
// 	});
// }

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
