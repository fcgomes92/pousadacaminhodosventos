import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    'pt-BR': {
      translations: {
        gitHub: 'GitHub',
        gitHubUrl: 'https://github.com/fcgomes92',
        blog: 'Site Pessoal',
        blogUrl: 'https://fcgomes.com',
        linkedIn: 'LinkedIn',
        linkedInUrl: 'https://linkedin.com/in/fcgomes92',

        close: 'Fechar',
        developedBy: 'Desenvolvido por Fernando Gomes',
        developersDialogPrimaryTitle: 'Fernando Coelho Gomes',
        developersDialogSecondaryTitle: 'Desenvolvedor Full-Stack',

        pageTitle: 'Pousada e Hostel Caminho dos Ventos - {{page}}',
        homePageTitle: 'Pousada e Hostel Caminho dos Ventos',
        moreInfoPageTitle: 'Mais Informações',
        photosPageTitle: 'Fotos',
        bookARoomPageTitle: 'Faça sua reserva',
        contactThanksPageTitle: 'Muito obrigado!',

        navbarHome: 'Página Inicial',
        navbarAbout: 'Mais informações',
        navbarPhotos: 'Fotos',
        navbarBookARoom: 'Faça sua reserva',
        navbarTour: 'Faça um tour!',
        navbarTourLink: 'https://www.google.com/maps/uv?hl=pt-BR&pb=!1s0x9dff359ff1b049%3A0x9a5a4522023284!2m20!8m2!1m1!1e2!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e6!2m2!1m1!1e4!2m2!1m1!1e5!3m1!7e115!4s%2Fmaps%2Fplace%2Fpousada%2Bcaminho%2Bdos%2Bventos%2F%40-22.4156972%2C-44.979818%2C3a%2C75y%2C295.6h%2C90t%2Fdata%3D*213m4*211e1*213m2*211skqPwE7Zxy9PBAWnMzxrfUQ*212e0*214m2*213m1*211s0x9dff359ff1b049%3A0x9a5a4522023284!5spousada%20caminho%20dos%20ventos%20-%20Pesquisa%20Google&imagekey=!1e10!2sAF1QipMyd73cfTkrt1EoARj5edKL-8KOulazuJ5U0m9D&sa=X&ved=2ahUKEwjtlNGuvNHdAhWKkJAKHdWqANAQpx8wD3oECAsQDg&activetab=panorama',

        bannerHeaderTitle1: 'Pousada e Hostel',
        bannerHeaderTitle2: 'Caminho dos Ventos',
        bannerHeaderTitle3: 'Passa Quatro - MG',

        contactFormTitle: 'Entre em contato com a gente',
        contactFormSubtitle: 'Aqui você pode enviar suas dúvidas, sugestões ou até mesmo reservar sua estadia em nosso lindo espaço!',

        yourName: 'Seu nome',
        subject: 'Assunto',
        subjectSelectSuggestion: 'Sugestão',
        subjectSelectQuestion: 'Dúvida',
        subjectSelectReservation: 'Reserva',
        yourEmail: 'Seu Email',
        message: 'Mensagem',

        send: 'Enviar',

        footerMapBanner: 'Voltar ao Topo',
        footerMapAbout: 'Sobre',
        footerMapContact: 'Entrar em Contato',
        footerMapHome: 'Página Inicial',
        footerMapMoreInfo: 'Mais Informações',
        footerMapPhotos: 'Fotos',
        footerMapBookARoom: 'Faça a sua reserva',

        moreInfoBannerTitle1: 'Sobre',
        moreInfoBannerTitle2: 'o Caminho dos Ventos',

        photosBannerTitle1: 'Fotos',
        photosBannerTitle2: 'Conheça nosso lindo espaço!',

        moreInfoTextMapText1: 'A Pousada e Hostel Caminho dos Ventos está estruturada para receber os amantes do pedal, bem como os demais segmentos da população que gostam de curtir a natureza e as trilhas da maravilhosa Serra da Mantiqueira.',
        moreInfoTextMapText2: 'Estamos localizados no bairro Pinheirinhos, na cidade de Passa Quatro - MG, apesar de sua estrutura simples, possuímos uma bela vista do Pico da Gomeira, que compõe parte do complexo da Mantiqueira.',
        moreInfoTextMapText3: 'Ficamos bem perto das cidades de Virginia, Itanhandú, Itamonte, Pouso Alto, São Sebastião do Rio Verde e vários distritos da região, onde existe a diversidade e capacidade de um ótimo turismo rural.',

        photosGalleryTitle: 'Confira algumas fotos de nosso lindo espaço',

        aboutTitle: 'Venha conhecer a beleza do nosso espaço!',
        aboutFacilitiesTitle: 'A Pousada e Hostel Caminho dos Ventos conta com:',
        aboutFacilitiesListItem0: 'Piscina;',
        aboutFacilitiesListItem1: 'Sauna seca e a vapor;',
        aboutFacilitiesListItem2: 'Garagem para bikes;',
        aboutFacilitiesListItem3: 'Lavador para as bikes;',
        aboutFacilitiesListItem4: 'Cozinha aberta 24H para utilização dos hóspedes;',
        aboutFacilitiesListItem5: 'Área gourmet;',
        aboutFacilitiesListItem6: 'Banheiros masculino e feminino, externos, e com banho a serpentina de Fogão a Lenha;',
        aboutFacilitiesListItem7: 'Transporte próprio para quem vai fazer a travessia da Serra Fina;',
        aboutFacilitiesListItem8: 'Ampla área verde de frente para a Serra da Mantiqueira!',
        aboutFacilitiesListItem9: 'Aceitamos todos os tipos de cartões de débito!',

        moreInfoTextMapTitle: 'Um pouco sobre nós',

        bookARoom: 'Faça sua reserva agora mesmo!',
        bookARoomTitle1: 'Reserve hoje sua estadia na',
        bookARoomTitle2: 'Pousada e Hostel Caminho dos Ventos',
        contactsInfoTitle: 'Você pode realizar sua reserva através dos contatos abaixo',
        bookARoomFormSubtitle: 'Ou faça sua reserva utilizando o formulário abaixo!',
        bookARoomCardReminder: 'Aceitamos todos os tipos de cartões de débito!',

        contactPhone: '+55 (35) 9 9700-9631​⁠​',
        contactPhoneLink: 'tel:5535997009631​⁠​',
        contactPhone2: '+55 (35) 3371-3300',
        contactPhoneLink2: 'tel:553533713300',
        contactEmail: 'sergiomarcusrgomes@hotmail.com',
        contactEmailLink: 'mailto:sergiomarcusrgomes@hotmail.com',
        contactAddressPt1: 'Rua Clementino José de Siqueira, 2029, Pinheirinhos',
        contactAddressPt2: 'Passa Quatro / MG',
        contactAddressLink: 'https://goo.gl/maps/WqnJ8Uxacxw',

        contactThanksTitle: 'Obrigado!',
        contactThanksSubtitle: 'Nós iremos responder o mais rápido possível no email informado no formulário.',

        notFoundTitle: '404! Página não encontrada!',
        notFoundSubtitle: 'A página não foi encontrada.',
        notFoundCta: 'Clique aqui para voltar a página inicial',

        howToGetThere: 'Como chegar',

        ctaBarText: 'Faça um tour em nosso espaço. Clique aqui!',
      },
    },
  },
  fallbackLng: 'pt-BR',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
