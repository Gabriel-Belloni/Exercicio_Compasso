"use strict";

/* const e let
{

    for(let i = 0; i < 10; i++) {
        console.log(i)
    }
}


const person = {name: 'John'}

 person.name = 'gabriel'
 console.log(person)
---------------------------------------------------------------- 
operaçoes em arrays
 const numbers = [1,2,3,4,5,6,7,8,9,10]

 numbers.forEach(function(number, index) {
    numbers[index] = number +1
 })
----------------------------------------------------------------
operaçao em arrays sem modificar a original
console.log(numbers)
 
const numbers = [1,2,3,4,5,6,]
const newNumbers = numbers.map(function(number){
    return number +1
})

console.log(newNumbers)
console.log(numbers)
---------------------------------------------------------------- 
*
reduce reduz todos os parametros do array em uma so variavel

const numbers = [1,2,3,4,5,6,]

const total = numbers.reduce(function(total, next){
    return total + next
})
console.log(total)

---------------------------------------------------------------- 

filter serve para filtrar informaçao 

const todos = [
    {text: 'assistir aula cataline conceitos', done: true },
    {text: 'assistir aula cataline preparando ambiente', done: true},
    {text: 'assistir aula cataline ES features', done: false},
]

const donetodos = todos.filter(function(todo){
    return todo.done
})

console.log(donetodos)


const find = todos.find(function(todo){
    return todo.text == 'assistir aula cataline ES features'
})
console.log(find)

const index = todos.findIndex(function(todo){
    return todo.text == 'assistir aula cataline ES features'
})
console.log(index)
const cars= ['fusca','cvic','hb20']

const hasFusca = cars.some(function(car){
    return car == 'fusca'
})
console.log(hasFusca)

----------------------------------------------------------------
arrow functions 
const todos = [
    {text: 'assistir aula cataline conceitos', done: true },
    {text: 'assistir aula cataline preparando ambiente', done: true},
    {text: 'assistir aula cataline ES features', done: false},
]


const donetodos = todos.filter((todo) => todo.done)

console.log(donetodos)

// funçao comum

//function anything(){
//    console.log('hello world')
//}

arrow function
const anything = () => ({name: 'hello world'})

console.log(anything())

---------------------------------------------------------------------------------------
parametro padrao
function sayHello(name = 'gabriel') {
  console.log('ola'+name)
}

const sayHello = (name = 'gabriel') => console.log('ola '+name)

sayHello()

------------------------------------------------------------------------------------------------

template
// o valor da camisa e r$ 16, pode comprar

const showProduct = (product, price) => {
    console.log(`O valor de ${product} é R$ ${Math.round(price)}, pode comprar`)
}

showProduct('Camisa', 15.88)

---------------------------------------------------------------------------
object short syntax 


const name = 'camiseta'
const price = 20

const product = {
    name,
    price,
    em_Estoque: true
}

console.log(product)
---------------------------------------------------------------------------------------------------------

Desestruturaçao


const fruits = ['maça','pera','uva']

//const a = fruits[0]
//const b = fruits[1]

//desestruturando arrays

const  [a,b]= fruits

console.log(a,b)

// desestruturando objetos
const person = {
    firstName: 'gabriel',
    secondName: 'belloni',
    age: 21,
    address:{
        city: 'Marau',
        region: 'RS',
    },
}

const {firstName,secondName, address:{ city}} = person

console.log(firstName,secondName,city)

const showfullname =({firstName, secondName}) => {
    console.log(`${firstName} ${secondName}`)
}

------------------------------------------------------------------------------------------------
operadores rest/spread

*/
var numbers = [1, 2, 3, 4, 5, 6];
var first = numbers[0],
    second = numbers[1],
    rest = numbers.slice(2);
console.log(rest);

var sum = function sum() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(sum(5, 5, 10, 10, 10));
