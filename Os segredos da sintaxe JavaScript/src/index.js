const assert = require('assert');
const Employee = require('./employee');
const Util = require('./util');

//enun
const GENDER = {
  male: 'male',
  female: 'female',
};

// criando contexto
{
  const employye = new Employee({
    name: 'Xuxa da Silva',
    gender: GENDER.female,
  });

  // caso de erro, birthYear é esperado ser passado
  assert.throws(() => employye.birthYear);
  //   console.log('e', employye.birthYear);
}

// novo contexto
{
  const employye = new Employee({
    name: 'Tumtum',
    age: 5,
    gender: GENDER.male,
  });

  // caso de acerto
  assert.deepStrictEqual(employye.name, 'Mr. Tumtum');
  assert.deepStrictEqual(employye.age, undefined);
  assert.deepStrictEqual(employye.grossPay, Util.formatCurrency(5000.4));
  assert.deepStrictEqual(employye.netPay, Util.formatCurrency(4000.32));
}

// const teste = new EntityBase({
//   name: 'Tiago',
//   gender: 'male',
// });

// const teste2 = new EntityBase({
//   name: 'xuxa da silva',
//   gender: 'mfemale',
// });

// console.log(teste.name);
// console.log(teste2.name);
