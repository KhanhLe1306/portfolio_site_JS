                    // MENU SHOW WHILE HIDDEN
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      
    //   MENU SHOW
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

        // MENU HIDDEN
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

// HIDE MENU WHENEVER USER CLICK ON EACH LINK

const navLinks = document.querySelectorAll('.nav__link')
const linkAction = () => {
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(link => link.addEventListener('click', linkAction))

//OPEN SKILLS OF EACH BIG SKILL
const openArrows = document.querySelectorAll('.skill__open-icon')
