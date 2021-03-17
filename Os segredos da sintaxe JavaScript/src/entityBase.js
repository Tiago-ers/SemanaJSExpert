class EntityBase {
  // define as propriedades como privadas
  #name;
  #age;
  #gender;
  constructor({ name, age, gender }) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
  }

  get name() {
    const preffix = this.#gender === 'male' ? 'Mr.' : 'Mis.';
    return `${preffix} ${this.#name}`;
  }

  get birthYear() {
    if (!this.#age) {
      throw new Error('O ano é obrigatório !');
    }
    return new Date().getFullYear() - this.#age;
  }

  set age(value) {
    this.#age = value;
  }
}

module.exports = EntityBase;
