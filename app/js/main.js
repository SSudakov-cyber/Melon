// tabs
let servicesLink = document.querySelectorAll('.services__link');
let servicesText = document.querySelectorAll('.services__text');
let linkClicked = false;
let tabFirstText = document.getElementById('tab-0');

servicesLink.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (linkClicked === false) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');
            servicesLink.forEach((child) => {
                child.classList.remove('services__link_active');
            });
            servicesText.forEach((child) => {
                child.classList.remove('services__text_active');
            });
            item.classList.add('services__link_active');
            document.getElementById(id).classList.add('services__text_active');
            tabFirstText.style.display = 'none';
            linkClicked = true;
        } else if (e.target.classList.contains('services__link_active') === true) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');
            item.classList.remove('services__link_active');
            document.getElementById(id).classList.remove('services__text_active');
            tabFirstText.style.display = 'block';
            linkClicked = false;

        } else if (e.target.classList.contains('services__link_active') === false) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');
            servicesLink.forEach((child) => {
                child.classList.remove('services__link_active');
            });
            servicesText.forEach((child) => {
                child.classList.remove('services__text_active');
            });
            item.classList.add('services__link_active');
            document.getElementById(id).classList.add('services__text_active');
            tabFirstText.style.display = 'none';
        }
    });

});

// main slider

let mainSlider = new Swiper('.main__slider', {
    slidesPerView: 1,
    spaceBetween: 200,
    loop: true,
    navigation: {
        nextEl: '.next__arrow',
        prevEl: '.prev__arrow',
        hideOnClick: true,
    }
});

// brands slider
let brandSlider = new Swiper('.brands-slider', {
    slidesPerView: 7,
    spaceBetween: 80,
    loop: true,
});