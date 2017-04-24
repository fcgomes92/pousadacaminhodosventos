let _stringsInstance = null;

// singleton strings
class _Strings {
  // define single strings
  strings = {
    app: {
      pageTitle: "Pousada Caminho dos Ventos",
      cardTitle: "Pousada Caminho dos Ventos",
      info: "Estamos em construção. Para ficar atualizado com informções sobre nossa pousada, se inscreva abaixo e iremos te informar por email as novidades!",
      infoSubmitted: "Obrigado! Assim que tivermos novidades iremos te avisar!",
      textFieldEmailLabel: "Seu email...",
      textFieldFirstNameLabel: "Seu nome...",
      textFieldLastNameLabel: "Seu sobrenome...",
      subscribe: "Inscreva-se"
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
