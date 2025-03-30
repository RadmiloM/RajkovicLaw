const russianFlag = document.querySelector('.russian');
const englandFlag = document.querySelector('.great-britain');
const serbianFlag = document.querySelector('.serbian');
const franceFlag = document.querySelector('.france');
const imageText = document.querySelector('.image-text');


russianFlag.addEventListener('click', () => {
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = ' О нас'
    services.textContent = 'Услуги';
    contact.textContent = 'Контакты';
    imageText.textContent = `В Rajkovic Law мы являемся защитниками справедливости,гарантируя,
    что каждый человек и бизнес получат необходимую юридическую поддержку. 
    Независимо от того, 
    сталкиваетесь ли вы с сложными юридическими проблемами или нуждаетесь в консультации по личным вопросам, 
    мы предоставляем четкое, эффективное и сострадательное представительство.`;
});

englandFlag.addEventListener('click', () => {
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = 'About'
    services.textContent = 'Services';
    contact.textContent = 'Contact';
    imageText.textContent =`At Rajkovic Law, we stand as the advocates of justice, 
                ensuring that every individual and business receives the legal support they deserve. 
                Whether you are facing complex legal challenges or need guidance on a personal matter, 
                we provide clear, effective, and compassionate representation.`

});

franceFlag.addEventListener('click', () => {
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = 'À propos'
    services.textContent = 'Services';
    contact.textContent = 'Contact';
    imageText.textContent =`Chez Rajkovic Law, nous sommes les défenseurs de la justice, 
    veillant à ce que chaque individu et chaque entreprise reçoive le soutien juridique qu'ils méritent. 
    Que vous soyez confronté à des défis juridiques complexes ou que vous ayez besoin de conseils pour une affaire personnelle, 
    nous offrons une représentation claire, efficace et compatissante.`;
})

serbianFlag.addEventListener('click', () => {
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const contact = document.querySelector('.contact');

    about.textContent = 'O nama'
    services.textContent = 'Usluge';
    contact.textContent = 'Kontakt';
    imageText.textContent =`U Rajkovic Law, 
    mi smo zagovornici pravde, osiguravajući da svaka osoba i preduzetnik dobiju pravnu podršku koju zaslužuju. 
    Bilo da se suočavate sa složenim pravnim izazovima ili vam je potrebna pomoć u ličnim stvarima, pružamo jasno, 
    efikasno i saosećajno zastupanje.`;
})