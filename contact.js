const mobile = document.querySelector('.phone-text');
const email = document.querySelector('.email-text-style');
const language = localStorage.getItem('language') || 'en';

updateContactDetails();
function updateContactDetails() {
    switch (language) {
        case 'en':
            mobile.innerHTML = '&nbsp Phone';
            email.innerHTML = '&nbsp Email';
            return;
        case 'ru':
            mobile.innerHTML = '&nbsp Телефон';
            email.innerHTML = '&nbsp Эл. почта';
            return;
        case 'fr':
            mobile.innerHTML = '&nbsp Téléphone';
            email.innerHTML = '&nbsp Email';
            return;
        case 'srb':
            mobile.innerHTML = '&nbsp Telefon';
            email.innerHTML = '&nbsp E-pošta';
            return;
        default:
            mobile.innerHTML = '&nbsp Phone';
            email.innerHTML = '&nbsp Email';
    }
}