import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        'pt-BR': {
            translations: {
                homePageTitle: "Pousada e Hostel Caminho dos Ventos",
                navbarHome: 'Página Inicial',
                navbarAbout: 'Mais informações',
                navbarPhotos: 'Fotos',

                footerContact: "Contato",
                footerAbout: "Sobre",
                cardTitle: "Pousada e Hostel Caminho dos Ventos",
                info: "A Pousada e Hostel Caminho dos Ventos conta com piscina, sauna seca e a vapor, garagem, lavador, oficina  para as bikes, cozinha aberta 24 h para utilização dos hóspedes, área gourmet, banheiros masculino e feminino externo com banho a serpentina de fogão a lenha e uma ampla área verde de frente para a serra da mantiqueira.",
                readMore: "Mais Informações",
                photosText: "Fotos",
                contactButton: "Entre em contato",
                aboutTitle: "Sobre a Pousada e Hostel Caminho dos Ventos",
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
