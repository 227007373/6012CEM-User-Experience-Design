const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        accordionItems.forEach((otherItem) => {
            const otherContent = otherItem.querySelector('.accordion-content');
            if (otherContent !== content) {
                otherContent.style.display = 'none';
                otherContent.classList.remove('active');
            }
        });

        content.classList.toggle('active');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
const accordionItems2 = document.querySelectorAll('.accordion-item-2');

accordionItems2.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        accordionItems2.forEach((otherItem) => {
            const otherContent = otherItem.querySelector('.accordion-content');
            if (otherContent !== content) {
                otherContent.style.display = 'none';
                otherContent.classList.remove('active');
            }
        });

        content.classList.toggle('active');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

const hamButtom = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-header-menu');
const body = document.querySelector('body');
hamButtom.addEventListener('click', function () {
    console.log();
    if (!mobileMenu.classList.contains('hide')) {
        mobileMenu.classList.add('hide');
        body.classList.remove('noScroll');
    } else {
        mobileMenu.classList.remove('hide');
        body.classList.add('noScroll');
    }
});

const searchLink = document.querySelector('.search-link');
const searchinput = document.querySelector('.search-r .search input');
searchLink.addEventListener('click', function () {
    window.location = 'https://www.vtc.edu.hk/admission/tc/search/?search=' + searchinput.value;
});

const taba = document.querySelector('.tab.a');
const tabb = document.querySelector('.tab.b');

taba.addEventListener('click', function () {
    console.log('?');

    if (!taba.classList.contains('active')) {
        taba.classList.add('active');
    }
    if (tabb.classList.contains('active')) {
        tabb.classList.remove('active');
    }
});

tabb.addEventListener('click', function () {
    if (!tabb.classList.contains('active')) {
        tabb.classList.add('active');
    }
    if (taba.classList.contains('active')) {
        taba.classList.remove('active');
    }
});
