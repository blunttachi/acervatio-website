feather.replace();
function goToMain() {
    window.location.assign("https://acervatio.org");
}
function classToggle() {
    const navs = document.querySelectorAll('.nav-items')

    navs.forEach(nav => nav.classList.toggle('nav-res'));
}

document.querySelector('.toggle')
    .addEventListener('click', classToggle);