const aboutMeTitle = document.querySelector(".about-me-title");
const aboutMeText = document.querySelector(".about-me-text");
const language = localStorage.getItem('language') || 'srb';

getLanguage();
function getLanguage() {
    switch (language) {
        case 'en':
            aboutMeTitle.textContent = "About Dragana Rajković";
            aboutMeText.textContent = `Dragana Rajković graduated from the Faculty of Law of the University of Belgrade, 
            and after graduation she obtained a master's degree at the Faculty of Law of the University of Belgrade. 
            After several years of experience in law offices in Serbia, she founded her own law office in 2024.
            with headquarters in Belgrade. 
            In addition to his native Serbian language, he is fluent in English, French and Russian, 
            offering legal services in all four languages.`;
            return;
        case 'ru':
            aboutMeTitle.textContent = "О Драгане Райкович";
            aboutMeText.textContent = `Драгана Райкович окончила юридический факультет Белградского университета, 
            а после окончания университета получила степень магистра на юридическом факультете Белградского университета. 
            После нескольких лет работы в юридических фирмах в Сербии в 2024 году она основала собственную юридическую фирму.
со штаб-квартирой в Белграде. Помимо родного сербского языка, свободно владеет английским, французским и русским языками, 
предлагая юридические услуги на всех четырех языках.`;
            return;
        case 'fr':
            aboutMeTitle.textContent = "À propos de Dragana Rajković";
            aboutMeText.textContent = `Dragana Rajković est diplômée de la Faculté de droit de l'Université de Belgrade, 
            où elle a obtenu un master. Après plusieurs années d'expérience en cabinets d'avocats en Serbie, 
            elle a fondé son propre cabinet en 2024, dont le siège social est à Belgrade. Outre le serbe, sa langue maternelle, 
            il parle couramment l'anglais, le français et le russe et propose des services juridiques dans ces quatre langues.`;
            return;
        case 'srb':
            aboutMeTitle.textContent = "O Dragani Rajković";
            aboutMeText.textContent = `Dragana Rajković je diplomirala na Pravnom fakultetu Univerziteta u Beogradu, 
                    a nakon diplomiranja je stekla master diplomu na Pravnom fakultetu Univerziteta u Beogradu.    
                    Nakon nekoliko godina iskustva u advokatskim kancelarijama u Srbiji, osnovala je svoju advokatsku kancelariju 2024.
                     godine sa sedištem u Beogradu. Pored svog maternjeg srpskog jezika, tečno govori engleski, francuski i ruski, 
                     nudeći pravne usluge na sva četiri jezika.`;
            return;
        default:
            aboutMeTitle.textContent = "O Dragani Rajković";
            aboutMeText.textContent = `Dragana Rajković je diplomirala na Pravnom fakultetu Univerziteta u Beogradu, 
                    a nakon diplomiranja je stekla master diplomu na Pravnom fakultetu Univerziteta u Beogradu.    
                    Nakon nekoliko godina iskustva u advokatskim kancelarijama u Srbiji, osnovala je svoju advokatsku kancelariju 2024.
                     godine sa sedištem u Beogradu. Pored svog maternjeg srpskog jezika, tečno govori engleski, francuski i ruski, 
                     nudeći pravne usluge na sva četiri jezika.`;
            return;

    }
}