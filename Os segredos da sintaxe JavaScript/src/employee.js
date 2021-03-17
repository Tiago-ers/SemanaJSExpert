const EntityBase = require('./entityBase');
const Util = require('./util');

class Employee extends EntityBase {
  // menbro estático privado
  static #TAXES_PERCENTUAL = 0.2;

  // pagamento bruto
  #grossPay = 5000.4;

  // formata grossPay na moeda local
  get grossPay() {
    return Util.formatCurrency(this.#grossPay);
  }

  get netPay() {
    const result = this.#grossPay - (this.#grossPay * Employee.#TAXES_PERCENTUAL);
    return Util.formatCurrency(result);
  }
}

module.exports = Employee;
