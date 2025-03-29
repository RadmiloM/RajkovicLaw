const russianFlag = document.querySelector('.russian');
const englandFlag = document.querySelector('.great-britain');
serbianFlag = document.querySelector('.serbian');

russianFlag.addEventListener('click', () => {
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = 'O nas'
    services.textContent = 'Услуги';
    contact.textContent = 'Контакт';
});

englandFlag.addEventListener('click', () => {
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = 'About'
    services.textContent = 'Services';
    contact.textContent = 'Contact';

});

serbianFlag.addEventListener('click', () => {
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = 'O nama'
    services.textContent = 'Usluge';
    contact.textContent = 'Kontakt';
})