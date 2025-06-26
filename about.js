const aboutTitle = document.querySelector('.about-title');
const firstParagraph = document.querySelector('.first-paragraph');
const secondParagraph = document.querySelector('.second-paragraph');
const thirdParagraph = document.querySelector('.third-paragraph');
const language = localStorage.getItem('language') || 'srb';


getLanguage();
function getLanguage() {
        switch (language) {
                case 'en':
                        aboutTitle.textContent = `About Dragana Rajković Law Office`;
                        firstParagraph.textContent = `D. Rajković Law provides a wide range of legal services to clients. 
            The firm was established to provide practical legal advice to individuals and business entities, 
            and to approach complex legal issues with a strategically oriented approach in order to achieve results..`;
                        secondParagraph.textContent = `We provide legal services in the following areas of law, 
                        in particular in Corporate Law and Mergers and Acquisitions, 
                        Bankruptcy and Liquidation, Real estate and Property Law, 
                        Obligation law, Labour Law, Family Law, Inheritance law, 
                        Tax Law, Banking and Finance Law, 
                        Intellectual Property Law and Information Technology Law. 
                        Our expertise includes providing legal assistance to natural and legal persons including, 
                        but not limited to litigation, civil and enforcement proceedings, 
                        business, labour law, obligation law, family and succession law, 
                        intellectual property law and IT law. Our motto is reflected in 3 words - integrity, dedication and success.`;
                        return;
                case 'ru':
                        aboutTitle.textContent = `О юридической фирме Dragana Rajković`;
                        firstParagraph.textContent = `D. Rajković Law предоставляет широкий спектр юридических услуг клиентам. 
                        Фирма была создана для предоставления практических юридических консультаций физическим и юридическим лицам, 
                        а также для решения сложных юридических вопросов со стратегически ориентированным подходом для достижения результатов.`;
                        secondParagraph.textContent = `Мы предоставляем юридические услуги в следующих областях права, 
                        в частности, в корпоративном праве и слияниях и поглощениях, 
                        банкротстве и ликвидации, имущественном праве, 
                        обязательственном праве, трудовом праве, семейном праве, 
                        наследственном праве, налоговом праве, банковском и 
                        финансовом праве, праве интеллектуальной собственности и праве информационных технологий. 
                        Наша экспертиза включает оказание юридической помощи физическим и юридическим лицам, включая, 
                        помимо прочего, судебные разбирательства, гражданское и исполнительное производство, бизнес, 
                        трудовое право, обязательственное право, семейное и наследственное право, 
                        право интеллектуальной собственности и ИТ-право. Наш девиз отражен в 3 словах - честность, преданность и успех.`;
                        return;
                case 'fr':
                        aboutTitle.textContent = `À propos du cabinet d'avocats Dragana Rajković`;
                        firstParagraph.textContent = `Le cabinet D. Rajković offre une large gamme de services juridiques à ses clients. 
                        Il a été créé pour fournir des conseils juridiques pratiques aux particuliers et aux entreprises, 
                        et pour aborder les questions juridiques complexes avec une approche stratégique afin d'obtenir des résultats.`;
                        secondParagraph.textContent = `Nous proposons des services juridiques dans les domaines suivants: 
                        droit des sociétés et fusions-acquisitions, faillites et liquidations, 
                        droit immobilier, droit des obligations, droit du travail, 
                        droit de la famille, droit des successions, droit fiscal, 
                        droit bancaire et financier, droit de la propriété intellectuelle et droit 
                        des technologies de l'information. Notre expertise comprend l'assistance juridique aux 
                        personnes physiques et morales, notamment en matière de contentieux, 
                        de procédures civiles et d'exécution, de droit des affaires, 
                        de droit du travail, de droit des obligations, 
                        de droit de la famille et des successions, 
                        de droit de la propriété intellectuelle et de droit des technologies de l'information. 
                        Notre devise se résume en trois mots : intégrité, dévouement et réussite.`;
                        return;
                case 'srb':
                        aboutTitle.textContent = `O advokatskoj kancelariji Dragane Rajković`;
                        firstParagraph.textContent = `D. Rajković Law pruža široki spektar pravnih usluga klijentima. 
            Firma je osnovana da pruži praktične pravne savete fizičkim i pravnim licima, i pristupi složenim pravnim pitanjima 
            sa strateškim orijentisanim pristupom u cilju ostvarivanja rezultata.`
                        secondParagraph.textContent = `Pružamo pravne usluge iz sledećih oblasti prava, 
            posebno u privrednom pravu, 
            korporativnom pravu i spajanjima i akvizicijama,
            stečaju i likvidaciji, pravu nekretnina i imovinskom pravu, 
            obligacionom pravu, radnom pravu, 
            porodičnom pravu, naslednom pravu, 
            poreskom pravu, 
            bankarskom i finansijskom pravu, 
            pravu intelektualne svojine i pravu informacionih tehnologija, 
            Naša ekspertiza obuhvata pružanje pravne pomoći fizičkim i pravnim licima uključujući, 
            ali ne ograničavajući se na parnični,
            vanparnični i izvršni postupak, 
            privredno pravo, radno pravo, 
            obligaciono pravo, 
            porodično i nasledno pravo, 
            pravo intelektualne svojine i IT pravo. 
            Naš moto se ogleda u 3 reči- integritet, posvećenost i uspeh.`;
                        return;
                default:
                        aboutTitle.textContent = `O advokatskoj kancelariji Dragane Rajković`;
                        firstParagraph.textContent = `D. Rajković Law pruža široki spektar pravnih usluga klijentima. 
            Firma je osnovana da pruži praktične pravne savete fizičkim i pravnim licima, i pristupi složenim pravnim pitanjima 
            sa strateškim orijentisanim pristupom u cilju ostvarivanja rezultata.`
                        secondParagraph.textContent = `Pružamo pravne usluge iz sledećih oblasti prava, 
            posebno u privrednom pravu, 
            korporativnom pravu i spajanjima i akvizicijama,
            stečaju i likvidaciji, pravu nekretnina i imovinskom pravu, 
            obligacionom pravu, radnom pravu, 
            porodičnom pravu, naslednom pravu, 
            poreskom pravu, 
            bankarskom i finansijskom pravu, 
            pravu intelektualne svojine i pravu informacionih tehnologija, 
            Naša ekspertiza obuhvata pružanje pravne pomoći fizičkim i pravnim licima uključujući, 
            ali ne ograničavajući se na parnični,
            vanparnični i izvršni postupak, 
            privredno pravo, radno pravo, 
            obligaciono pravo, 
            porodično i nasledno pravo, 
            pravo intelektualne svojine i IT pravo. 
            Naš moto se ogleda u 3 reči- integritet, posvećenost i uspeh.`;
                        return;
        }
}