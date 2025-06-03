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
            firstParagraph.textContent = `At Dragana Rajković Law Office,
                    we are committed to providing clear,
                    compassionate,
                    and effective legal support to individuals and families navigating important life challenges.
                    Founded by attorney Dragana Rajkovic,
                    our firm offers a modern, client-focused approach built on trust, respect, and dedication.`;
            secondParagraph.textContent = `We understand that dealing with legal matters can be overwhelming —
                    that’s why we take the time to listen, explain your options,
                    and advocate for your rights every step of the way.
                    Whether you’re facing a legal dispute,
                    need guidance with documentation,
                    or simply want reliable legal advice,
                    we are here to support you with professionalism and care.`;
            thirdParagraph.textContent = `Our office proudly serves clients in Belgrade and focuses on family law,
                    immigration, civil matters.
                    Every case is treated with personal attention,
                    and every client is met with empathy, discretion and honest communication.
                    At Dragana Rajkovic Law Office your peace of mind is our priority.`;
            return;
        case 'ru':
            aboutTitle.textContent = `О юридической фирме Dragana Rajković`;
            firstParagraph.textContent = `В юридической фирме Dragana Rajković Law Office мы стремимся оказывать ясную,
сострадательную и эффективную юридическую поддержку отдельным лицам и семьям, сталкивающимся с важными жизненными трудностями.
Основанная адвокатом Драганой Райкович,наша фирма предлагает современный, ориентированный на клиента подход, основанный на доверии, уважении и преданности делу.`;
            secondParagraph.textContent = `Мы понимаем, что решение юридических вопросов может быть непреодолимым —
поэтому мы уделяем время, чтобы выслушать, объяснить ваши возможности и защищать ваши права на каждом этапе.
Сталкиваетесь ли вы с юридическим спором, нуждаетесь в руководстве по документации или просто хотите получить надежную юридическую консультацию,
мы здесь, чтобы оказать вам профессиональную и заботливую поддержку.`;
            thirdParagraph.textContent = `Наш офис с гордостью обслуживает клиентов в Белграде и фокусируется на семейном праве,
иммиграции, гражданских делах.Каждый случай рассматривается с индивидуальным вниманием, и каждый клиент встречает сочувствие, осмотрительность и честное общение.
В юридической конторе Dragana Rajkovic ваше спокойствие является нашим приоритетом.`;
            return;
        case 'fr':
            aboutTitle.textContent = `À propos du cabinet d'avocats Dragana Rajković`;
            firstParagraph.textContent = `Au cabinet d'avocats Dragana Rajković, 
            nous nous engageons à fournir un soutien juridique clair, compatissant et efficace aux personnes et aux familles confrontées à des difficultés importantes.
Fondé par Maître Dragana Rajković, notre cabinet propose une approche moderne, centrée sur le client, fondée sur la confiance, le respect et le dévouement.`;
            secondParagraph.textContent = `Nous comprenons que gérer des questions juridiques peut être une tâche ardue. 
            C'est pourquoi nous prenons le temps de vous écouter, 
            de vous expliquer vos options et de défendre vos droits à chaque étape. 
            Que vous soyez confronté à un litige, 
            que vous ayez besoin d'aide pour vos 
            documents ou que vous souhaitiez simplement des conseils juridiques fiables, 
            nous sommes là pour vous accompagner avec professionnalisme et attention.`;
            thirdParagraph.textContent = `Notre cabinet est fier de servir ses clients à Belgrade et se concentre sur le droit de la famille, l'immigration et les affaires civiles.
Chaque dossier est traité avec une attention personnalisée et chaque client bénéficie d'un accueil chaleureux, discret et honnête.
Au cabinet Dragana Rajković, votre tranquillité d'esprit est notre priorité.`;
            return;
        case 'srb':
            aboutTitle.textContent = `О адвокатској канцеларији Драгане Рајковић`;
            firstParagraph.textContent = `У адвокатској канцеларији Драгане Рајковић, 
            посвећени смо пружању јасне, саосећајне и ефикасне правне подршке појединцима и породицама које се суочавају 
            са важним животним изазовима. Основана од стране адвокатице Драгане Рајковић, 
            наша канцеларија нуди модеран, клијенту усмерен приступ, изграђен на поверењу, поштовању и посвећености.`
            secondParagraph.textContent = `Разумемо да бављење правним питањима може бити застрашујуће —
            зато одвајамо време да вас саслушамо, објаснимо вам могућности, 
            и заступамо ваша права у сваком кораку. 
            Без обзира да ли се суочавате са правним спором, 
            потребна вам је помоћ око документације, 
            или једноставно желите поуздан правни савет, ту смо да вас подржимо професионално и пажљиво.`;
            thirdParagraph.textContent = `Наша канцеларија поносно служи клијентима у Београду и фокусира се на породично право, имиграцију и грађанска питања. 
            Сваки случај се третира са личном пажњом, а сваки клијент се дочекује са емпатијом, дискрецијом и искреном комуникацијом.
             У адвокатској канцеларији Драгане Рајковић, ваш душевни мир је наш приоритет.`;
            return;
        default:
            aboutTitle.textContent = `About Dragana Rajković Law Office`;
            firstParagraph.textContent = `At Dragana Rajković Law Office,
                    we are committed to providing clear,
                    compassionate,
                    and effective legal support to individuals and families navigating important life challenges.
                    Founded by attorney Dragana Rajkovic,
                    our firm offers a modern, client-focused approach built on trust, respect, and dedication.`;
            secondParagraph.textContent = `We understand that dealing with legal matters can be overwhelming —
                    that’s why we take the time to listen, explain your options,
                    and advocate for your rights every step of the way.
                    Whether you’re facing a legal dispute,
                    need guidance with documentation,
                    or simply want reliable legal advice,
                    we are here to support you with professionalism and care.`;
            thirdParagraph.textContent = `Our office proudly serves clients in Belgrade and focuses on family law,
                    immigration, civil matters.
                    Every case is treated with personal attention,
                    and every client is met with empathy, discretion and honest communication.
                    At Dragana Rajkovic Law Office your peace of mind is our priority.`;
            return;
    }
}