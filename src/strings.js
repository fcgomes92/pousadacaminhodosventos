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
      readMore: "Mais Informações"
    },
    aboutComponent: {
      aboutTitle: "Sobre a Pousada Caminho dos Ventos",
      aboutText: `A pousada caminho dos ventos está sendo estruturada para receber os amantes do pedal bem como os demais segmentos da população que gostam de curtir a natureza e as trilhas da maravilhosa Serra da Mantiqueira.
Localizada no bairro Pinheirinhos na cidade de Passa Quatro apesar de sua estrutura simples, possui uma bela vista do pico da gomeira que faz parte do complexo da Mantiqueira, e fica bem perto das cidades de Virginia, Itanhandú, Itamonte, Pouso Alto, São Sebastião do Rio Verde e vários distritos da região, onde existem um grande potencial do turismo rural.`,
      callText: `A previsão de inauguração é para janeiro de 2018, mas veja nossas fotos, dê sugestões, se inscreva para receber nossas novidades e estaremos em breve esperando por vocês!`,
      returnText: 'Voltar',
      photosText: 'Fotos'
    },
    photosComponent: {
      title: "Fotos da Pousada",
      subtitle: "Clique na foto para ampliar e ver a beleza do nosso espaço!",
      aboutText: "Sobre a Pousada",
      subscribeText: 'Inscreva-se',
      closeDialog: 'Fechar',
    },
    contactDialog: {
      dialogTitle: "Contato",
      dialogContent: "Você pode entrar em contato conosco via:",
      contactPhone: '+55 (55) 5 5555 5555',
      contactEmail: 'sergio.gomes@pousadacaminhodosventos.com',
      closeButton: "Fechar",
    },
    aboutDialog: {
      dialogTitle: "",
      dialogContent: "",
      contact: "",
      closeButton: "Fechar",
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
