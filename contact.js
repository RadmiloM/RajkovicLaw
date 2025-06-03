const mobile = document.querySelector('.phone-text');
const email = document.querySelector('.email-text-style');
const contactDetails = document.querySelector('.contact-details');
const openingHours = document.querySelector('.opening-hours')
const language = localStorage.getItem('language') || 'en';

updateContactDetails();
function updateContactDetails() {
    switch (language) {
        case 'en':
            contactDetails.textContent = 'Contact details';
            openingHours.textContent = 'Opening hours';
            return;
        case 'ru':
            contactDetails.textContent = 'Контактные данные';
            openingHours.textContent = 'Часы работы';
            return;
        case 'fr':
            contactDetails.textContent = 'Coordonnées';
            openingHours.textContent = "Horaires d'ouverture";
            return;
        case 'srb':
            contactDetails.textContent = 'Контакт детаљи';
            openingHours.textContent = 'Radno vreme';
            return;
        default:
            contactDetails.textContent = 'Contact details';
            openingHours.textContent = 'Opening hours';
            return;
    }
}