// 1

const persona = [{
    nombre: 'Sebastian',
    apellido: 'Yabuki',
    edad: 33,
}
];
const {nombre, apellido, edad} = persona[0];
let yabuki = persona.map((persona) => `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}.`);
console.log(yabuki);

// 2

function sumarCubos(a, b, c) {
    return Math.pow(a, 3) +
    Math.pow(b, 3) + Math.pow(c, 3);
};
const resultado = sumarCubos(1, 5, 9);
console.log(resultado);

// 3

let valor = 0;

function valorEntregado(valor) {
    return valor * 0.1;
}
valor = valorEntregado(300);
valorEntregado(valor);

console.log(valor);
// 4

function ArrNumber(a, b, c, d, e) {
    console.log(a + b + c + d + e);
};
ArrNumber(10, 44, 78, 21, 31);


// 5

const valores = [1, true, 3, '4', 5, '6', 7, '8', 9, false];

const noString = valores.filter(numero => typeof(numero) !== 'string');

console.log(noString);




// 6

const number = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];

const minimo = Math.min(...number);
const maximo = Math.max(...number);

const menorMayor = number.filter(numb => {
    console.log(`${minimo} - ${maximo}`);
});


// 7

const entero = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 0];

console.log(`(${entero.indexOf(2)}${entero.indexOf(3)}${entero.indexOf(4)}) ${entero.indexOf(5)}${entero.indexOf(6)}${entero.indexOf(7)}-${entero.indexOf(8)}${entero.indexOf(9)}${entero.indexOf(0)}${entero.indexOf(1)}`);

// 8



// 9




// 10




// 11

const getBudgets= [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];
  
let suma = 0;

  let presupuestoSuma = getBudgets.reduce((suma, budget) => {
      return (suma += budget.budget);
  }, 0);

console.log(presupuestoSuma);
// 12

const getStudentNames = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
];

const nameless = getStudentNames.map((name) => {
    console.log(name.name);
});


// 13

const objectArray = {
    likes: 5,
    dislikes: 3,
    followers: 10,
};

console.log(Object.entries(objectArray));



// 14



// 15



// 16



// 17



// 18



// 19



// 20



// 21



// 22




