const button = document.querySelector('button');
button.addEventListener('click', () => {
    let nav = document.querySelector('.navigation');
    let pic = document.querySelector('.picture');
    nav.classList.toggle('active');
    button.classList.toggle('active_button');
    pic.classList.toggle('active_picture');
});