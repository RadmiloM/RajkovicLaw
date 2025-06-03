const russianFlag = document.querySelector('.russian');
const englandFlag = document.querySelector('.great-britain');
const serbianFlag = document.querySelector('.serbian');
const franceFlag = document.querySelector('.france');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const contact = document.querySelector('.contact');
const language = localStorage.getItem('language') || 'srb';


russianFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'ru');
    about.textContent = ' О нас'
    services.textContent = 'Услуги';
    contact.textContent = 'Контакты';
});

englandFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'en');
    about.textContent = 'About'
    services.textContent = 'Services';
    contact.textContent = 'Contact';
});

franceFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'fr');
    about.textContent = 'À propos'
    services.textContent = 'Services';
    contact.textContent = 'Contact';
})

serbianFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'srb');
    about.textContent = 'O nama'
    services.textContent = 'Usluge';
    contact.textContent = 'Kontakt';
})
this.getLanguage();
function getLanguage() {
    switch (language) {
        case 'en':
            about.textContent = 'About'
            services.textContent = 'Services';
            contact.textContent = 'Contact';
            return;
        case 'ru':
            about.textContent = ' О нас'
            services.textContent = 'Услуги';
            contact.textContent = 'Контакты';
            return;
        case 'fr':
            about.textContent = 'À propos'
            services.textContent = 'Services';
            contact.textContent = 'Contact';
            return;
        case 'srb':
            about.textContent = 'O nama'
            services.textContent = 'Usluge';
            contact.textContent = 'Kontakt';
            return;
        default:
            about.textContent = 'O nama'
            services.textContent = 'Usluge';
            contact.textContent = 'Kontakt';
            return;
    }
}