import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        'pt-BR': {
            translations: {
                pageTitle: "Pousada e Hostel Caminho dos Ventos - {{page}}",
                homePageTitle: "Pousada e Hostel Caminho dos Ventos",
                moreInfoPageTitle: "Mais Informações",
                photosPageTitle: "Fotos",

                navbarHome: 'Página Inicial',
                navbarAbout: 'Mais informações',
                navbarPhotos: 'Fotos',

                bannerHeaderTitle1: "Pousada e Hostel",
                bannerHeaderTitle2: "Caminho dos Ventos",
                bannerHeaderTitle3: "Passa Quatro - MG",

                aboutTitle: 'Venha conhecer a beleza do nosso espaço!',
                aboutFacilitiesTitle: 'A Pousada e Hostel Caminho dos Ventos conta com:',
                aboutFacilitiesListItem0: 'Uma ótima piscina;',
                aboutFacilitiesListItem1: 'Sauna seca e a vapor;',
                aboutFacilitiesListItem2: 'Garagem para bikes e carros;',
                aboutFacilitiesListItem3: 'Oficina para as bikes;',
                aboutFacilitiesListItem4: 'Cozinha aberta 24H para utilização dos hóspedes;',
                aboutFacilitiesListItem5: 'Área gourmet;',
                aboutFacilitiesListItem6: 'Banheiros masculino e feminino, externos, e com banho a serpentina de Fogão a Lenha;',
                aboutFacilitiesListItem7: 'Ampla área verde de frente para a Serra da Mantiqueira!',

                footerContact: "Contato",
                footerAbout: "Sobre",
                cardTitle: "Pousada e Hostel Caminho dos Ventos",
                readMore: "Mais Informações",
                photosText: "Fotos",
                contactButton: "Entre em contato",
                aboutText: `A Pousada e Hostel Caminho dos Ventos está estruturada para receber os amantes do pedal, bem como os demais segmentos da população que gostam de curtir a natureza e as trilhas da maravilhosa Serra da Mantiqueira.
      Localizada no bairro Pinheirinhos, na cidade de Passa Quatro - MG, apesar de sua estrutura simples, possui uma bela vista do Pico da Gomeira, que compõe parte do complexo da Mantiqueira. Fica bem perto das cidades de Virginia, Itanhandú, Itamonte, Pouso Alto, São Sebastião do Rio Verde e vários distritos da região, onde existe a diversidade e capacidade de um ótimo turismo rural.`,
                callText: `Já estamos em funcionamento! Entre em contato clicando aqui: `,
                callText2: 'Estamos esperando por vocês!',
                returnText: 'Página Inicial',
                title: "Fotos da Pousada",
                subtitle: "Clique na foto para ampliar e ver a beleza do nosso espaço!",
                closeDialog: 'Fechar',
                dialogTitle: "Contato",
                dialogContent: "Você pode entrar em contato conosco via:",
                contactPhone2: '+55 (35) 3371-3300',
                contactPhoneLink2: 'tel:553533713300',
                contactPhone: '+55 (35) 9 9700-9631​⁠​',
                contactPhoneLink: 'tel:5535997009631​⁠​',
                contactEmail: 'sergiomarcusrgomes@hotmail.com',
                contactEmailLink: 'mailto:sergiomarcusrgomes@hotmail.com',
                contactAddressPt1: "Rua Clementino José de Siqueira, 2029, Pinheirinhos",
                contactAddressPt2: "Passa Quatro / MG",
                contactAddressLink: "https://goo.gl/maps/WqnJ8Uxacxw",
                closeButton: "Fechar",
                contact: "Para saber mais acesse ou entre em contato por: ",
                site: 'fcgomes.com',
                siteURL: 'https://fcgomes.com',
                github: '@fcgomes92',
                githubURL: 'https://github.com/fcgomes92',
                email: 'fcgomes.92@gmail.com',
                emailURL: 'mailto:fcgomes.92@gmail.com',
            }
        },
    },
    fallbackLng: 'pt-BR',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ','
    },

    react: {
        wait: true
    }
});

export default i18n;
