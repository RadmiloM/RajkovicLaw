const newsTitle = document.querySelector(".news-title");
const newsText = document.querySelector(".news-text");
const newsLink = document.querySelector(".news-link");
const link = document.createElement("a");
link.setAttribute("href", "https://ceelegalmatters.com/serbia/16019-andrejic-partners-advises-eyemaxx-international-holding-consulting-on-organizational-restructuring-in-serbia");
link.setAttribute("target", "_blank");
link.setAttribute("rel", "noopener noreferrer");
console.log(link);
const language = localStorage.getItem('language') || 'srb';

getLanguage();
function getLanguage() {
    switch (language) {
        case "en":
            newsTitle.textContent = "News";
            newsText.textContent = `The founder of the law office, Dragana Rajković, has worked on M&A transactions and  
            corporate management in terms of establishment of companies, status changes of the company,  
            reduction and increase of basic capital in society, voluntary and  
            forced termination of the existence of a business company, drawing up all types of business contracts,  
            sale of shares in the company with the provision of collateral, as well as a change in the work structure in  
            society,  
            including drafting mutual terminations, notices before dismissal, termination of employment contracts and employment contracts.  
            Attorney Dragana Rajković was part of a large international M&A during her previous work  
            project  
            and there is an article about her engagement on the Legal 500 website.`;
            newsLink.textContent = "Reference:";
            newsLink.appendChild(link);
            link.textContent="Eyemaxx article";
            return;
        case "ru":
            newsTitle.textContent = "Новости";
            newsText.textContent = `Основательница юридической конторы Драгана Райкович работала над сделками M&A и 
            корпоративным управлением в части создания компаний, изменения статуса компании, 
            уменьшения и увеличения основного капитала в обществе, добровольного и 
            принудительного прекращения существования хозяйственного общества, составления всех видов хозяйственных договоров, 
            продажи акций в обществе с предоставлением обеспечения, а также изменения в структуре работы в 
            обществе, 
            включая составление взаимных расторжений, уведомлений перед увольнением, расторжения трудовых договоров и трудовых контрактов. 
            Адвокат Драгана Райкович принимала участие в крупном международном M&A во время своего предыдущего рабочего 
            проекта, и на сайте Legal 500 есть статья о ее участии.`;
            newsLink.textContent = "Ссылка:";
            newsLink.appendChild(link);
            link.textContent ="Статья о Eyemaxx";
            return;
        case "fr":
            newsTitle.textContent = "Nouvelles";
            newsText.textContent = `La fondatrice du cabinet, Dragana Rajković, 
            est intervenue sur des opérations de fusions-acquisitions et de gestion d'entreprise, 
            notamment en matière de création, de changement de statut, de réduction et d'augmentation du capital social, 
            de cessation volontaire et forcée d'entreprise, de rédaction de tous types de contrats commerciaux, 
            de cession d'actions avec constitution de garantie, ainsi que de modification de la structure du travail, 
            y compris la rédaction de résiliations amiables, de préavis de licenciement, 
            de résiliation de contrats de travail et de contrats de travail.
            Lors de son précédent projet, Maître Dragana Rajković a participé à un important projet international de fusions-acquisitions 
            et un article sur sa participation a été publié sur le site web de Legal 500.`;
            newsLink.textContent = "Référence:";
            newsLink.appendChild(link);
            link.textContent=`Article Eyemaxx`;
            return;
        case "srb":
            newsTitle.textContent = "Vesti";
            newsText.textContent = `Osnivač advokatske kancelarije Dragana Rajković je tokom svog dosadašnjeg rada radila na poslovima M&A transakcija i  
            korporativnog upravljanja u pogledu osnivanja privrednih društava, statusnih promena društva,  
            smanjenje i povećanje osnovnog kapirala u društvu, dobrovoljnog i  
            prinudnog prestanka postojanja privrednog društva, sastavljanje svih vrsta ugovora u privredni,  
            prodaja udela u privrednom društvu uz obezbeđenje kolaterala, kao i promenu radne strukture u  
            društvu,  
            uključujući izradu sporazumnih raskida, opomena pred otkaz, otkaza ugovora o radu i ugovora o radu.  
            Advokat Dragana Rajković je prilikom svog dosadašnjeg rada bila deo velikog međunarodnog M&A  
            projekta  
            pri čemu na sajtu Legal 500 postoji članak o njenom angažovanju.`;
            newsLink.textContent = "Referenca:";
            newsLink.appendChild(link);
            link.textContent = `Eyemaxx članak`;
            return;
        default:
            newsTitle.textContent = "Vesti";
            newsText.textContent = `Osnivač advokatske kancelarije Dragana Rajković je tokom svog dosadašnjeg rada radila na poslovima M&A transakcija i  
            korporativnog upravljanja u pogledu osnivanja privrednih društava, statusnih promena društva,  
            smanjenje i povećanje osnovnog kapirala u društvu, dobrovoljnog i  
            prinudnog prestanka postojanja privrednog društva, sastavljanje svih vrsta ugovora u privredni,  
            prodaja udela u privrednom društvu uz obezbeđenje kolaterala, kao i promenu radne strukture u  
            društvu,  
            uključujući izradu sporazumnih raskida, opomena pred otkaz, otkaza ugovora o radu i ugovora o radu.  
            Advokat Dragana Rajković je prilikom svog dosadašnjeg rada bila deo velikog međunarodnog M&A  
            projekta  
            pri čemu na sajtu Legal 500 postoji članak o njenom angažovanju.`;
            newsLink.textContent = "Referenca:";
            newsLink.appendChild(link);
            link.textContent = `Eyemaxx članak`
            return;
    }
}