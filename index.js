const russianFlag = document.querySelector('.russian');
const englandFlag = document.querySelector('.great-britain');
const serbianFlag = document.querySelector('.serbian');
const franceFlag = document.querySelector('.france');

russianFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'ru');
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = ' О нас'
    services.textContent = 'Услуги';
    contact.textContent = 'Контакты';
});

englandFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'en');
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = 'About'
    services.textContent = 'Services';
    contact.textContent = 'Contact';
});

franceFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'fr');
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = 'À propos'
    services.textContent = 'Services';
    contact.textContent = 'Contact';
})

serbianFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'srb');
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = 'O nama'
    services.textContent = 'Usluge';
    contact.textContent = 'Kontakt';
})

localStorage.removeItem('language');