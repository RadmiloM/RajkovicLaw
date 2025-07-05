const russianFlag = document.querySelector('.russian');
const englandFlag = document.querySelector('.great-britain');
const serbianFlag = document.querySelector('.serbian');
const franceFlag = document.querySelector('.france');
const about = document.querySelector('.about');
const services = document.querySelector('.services');
const contact = document.querySelector('.contact');
const language = localStorage.getItem('language') || 'srb';
console.log("language in line 9",language);

const aboutMenu = document.createElement("div");
aboutMenu.classList.add("about-menu");
const aboutOffice = document.createElement("a");
aboutOffice.setAttribute("href","about.html")
aboutOffice.classList.add("about-office");
aboutMenu.appendChild(aboutOffice);

const aboutMe = document.createElement("a");
aboutMe.setAttribute("href","about-me.html");
aboutMe.classList.add("about-me");
aboutMenu.appendChild(aboutMe);



russianFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'ru');
    about.textContent = 'О'
    aboutOffice.textContent = 'Об офисе';
    aboutMe.textContent = 'Обо мне';
    about.append(aboutMenu);
    services.textContent = 'Услуги';
    contact.textContent = 'Контакты';
});

englandFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'en');
    about.textContent = 'About';
    aboutOffice.textContent = 'About office';
    aboutMe.textContent = 'About me';
    about.append(aboutMenu);
    services.textContent = 'Services';
    contact.textContent = 'Contact';
});

franceFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'fr');
    about.textContent = 'À propos'
    aboutOffice.textContent = 'À propos du bureau';
    aboutMe.textContent = 'Sur moi';
    about.append(aboutMenu);
    services.textContent = 'Services';
    contact.textContent = 'Contact';
})

serbianFlag.addEventListener('click', () => {
    localStorage.setItem('language', 'srb');
    about.textContent = 'O';
    aboutOffice.textContent = 'O kancelariji';
    aboutMe.textContent = 'O meni';
    about.append(aboutMenu);
    services.textContent = 'Usluge';
    contact.textContent = 'Kontakt';
})
this.getLanguage();
function getLanguage() {
    console.log("languages is",language);
    switch (language) {
        case 'en':
            about.textContent = 'About'
            aboutOffice.textContent = 'About office';
            aboutMe.textContent = 'About me';
            about.append(aboutMenu);
            services.textContent = 'Services';
            contact.textContent = 'Contact';
            return;
        case 'ru':
            about.textContent = 'О'
            aboutOffice.textContent = 'Об офисе';
            aboutMe.textContent = 'Обо мне';
            about.append(aboutMenu);
            services.textContent = 'Услуги';
            contact.textContent = 'Контакты';
            return;
        case 'fr':
            about.textContent = 'À propos'
            aboutOffice.textContent = 'À propos du bureau';
            aboutMe.textContent = 'Sur moi';
            about.append(aboutMenu);
            services.textContent = 'Services';
            contact.textContent = 'Contact';
            return;
        case 'srb':
            about.textContent = 'O';
            aboutOffice.textContent = 'O kancelariji'
            aboutMe.textContent = "O meni";
            about.append(aboutMenu);
            services.textContent = 'Usluge';
            contact.textContent = 'Kontakt';
            return;
        default:
            about.textContent = 'O'
            aboutOffice.textContent = 'O kancelariji'
            aboutMe.textContent = "O meni";
            about.append(aboutMenu);
            services.textContent = 'Usluge';
            contact.textContent = 'Kontakt';
            return;
    }
}