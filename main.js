feather.replace();
function goToMain() {
    window.location.assign("https://acervatio.org");
}
function goToIg() {
    window.location.assign("https://instagram.com/acervatio");
}
function classToggle() {
    const navs = document.querySelectorAll('.nav-items')

    navs.forEach(nav => nav.classList.toggle('nav-res'));
}

document.querySelector('.toggle')
    .addEventListener('click', classToggle);