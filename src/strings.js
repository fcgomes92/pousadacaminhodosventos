let _stringsInstance = null;

// singleton strings
class _Strings {
  // define single strings
  strings = {
    app: {
      pageTitle: "Pousada Caminho dos Ventos",
      footerContact: "Contato",
      footerAbout: "Sobre"
    },
    subscribeComponent: {
      cardTitle: "Pousada Caminho dos Ventos",
      info: "Estamos em construção. Para ficar atualizado com informações sobre nossa pousada, se inscreva abaixo e iremos te informar por email as novidades!",
      infoSubmitted: "Obrigado! Assim que tivermos novidades iremos te avisar!",
      textFieldEmailLabel: "Seu email...",
      textFieldFirstNameLabel: "Seu nome...",
      textFieldLastNameLabel: "Seu sobrenome...",
      subscribe: "Inscreva-se",
      readMore: "Informações",
      photosText: "Fotos",
      formSubmitted: `Obrigado por se inscrever em nossa lista! Quando tivermos mais informações iremos te informar por email!. Se você deseja inscrever outro email, clique no link abaixo.`,
      subscribeOtherEmail: 'Clique aqui!'
    },
    aboutComponent: {
      aboutTitle: "Sobre a Pousada Caminho dos Ventos",
      aboutText: `A Pousada Caminho dos Ventos está sendo estruturada para receber os amantes do pedal, bem como os demais segmentos da população que gostam de curtir a natureza e as trilhas da maravilhosa Serra da Mantiqueira.
Localizada no bairro Pinheirinhos, na cidade de Passa Quatro - MG, apesar de sua estrutura simples, possui uma bela vista do Pico da Gomeira, que compõe parte do complexo da Mantiqueira. Fica bem perto das cidades de Virginia, Itanhandú, Itamonte, Pouso Alto, São Sebastião do Rio Verde e vários distritos da região, onde existe a diversidade e capacidade de um ótimo turismo rural.`,
      callText: `A previsão de inauguração é para janeiro de 2018, mas veja nossas fotos, dê sugestões, se inscreva para receber nossas novidades e estaremos em breve esperando por vocês!`,
      returnText: 'Inscreva-se',
      photosText: 'Fotos'
    },
    photosComponent: {
      title: "Fotos da Pousada",
      subtitle: "Clique na foto para ampliar e ver a beleza do nosso espaço!",
      aboutText: "Sobre a Pousada",
      subscribeText: 'Inscreva-se',
      closeDialog: 'Fechar'
    },
    contactDialog: {
      dialogTitle: "Contato",
      dialogContent: "Você pode entrar em contato conosco via:",
      contactPhone: '+55 (35) 9 9700-9631​⁠​',
      contactPhoneLink: 'tel:5535997009631​⁠​',
      contactEmail: 'sergiomarcusrgomes@hotmail.com',
      contactEmailLink: 'mailto:sergiomarcusrgomes@hotmail.com',
      closeButton: "Fechar"
    },
    aboutDialog: {
      dialogTitle: "Sobre o desenvolvedor",
      dialogContent: `Este site foi desenvolvido por Fernando Gomes.`,
      contact: "Para saber mais acesse ou entre em contato por: ",
      site: 'fcgomes.com',
      siteURL: 'https://fcgomes.com',
      github: '@fcgomes92',
      githubURL: 'https://github.com/fcgomes92',
      email: 'fcgomes.92@gmail.com',
      emailURL: 'mailto:fcgomes.92@gmail.com',
      closeButton: "Fechar"
    }
  };

  // define custom methods (like pruralize)

  constructor() {
    if (!_stringsInstance) {
      _stringsInstance = this;
    }
    return _stringsInstance;
  }

  setStrings(newStrings) {
    this.strings = newStrings;
  }
}

const s = new _Strings();

export default s;
