class Regex {
    private CORREIOS_REGEX = /^[A-Z]{2}[1-9]{9}[A-Z]{2}$/;

    private UPS_REGEX = /\b(1Z ?[0-9A-Z]{3} ?[0-9A-Z]{3} ?[0-9A-Z]{2} ?[0-9A-Z]{4} ?[0-9A-Z]{3} ?[0-9A-Z]|[\dT]\d\d\d ?\d\d\d\d ?\d\d\d)\b/;

    getCorreiosRegex() {
      return this.CORREIOS_REGEX;
    }

    getUpsRegex() {
      return this.UPS_REGEX;
    }

    isCorreios(cod: string) {
      return this.CORREIOS_REGEX.test(cod);
    }

    isUps(cod: string) {
      return this.UPS_REGEX.test(cod);
    }
}

export default new Regex();
