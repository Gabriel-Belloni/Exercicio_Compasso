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



const numbers = [1,2,3,4,5,6,]

const [first, second, ... rest] = numbers

console.log(rest)

const sum = (... params) => {
    return params.reduce((total,next) => total + next)
}
console.log(sum(5,5,10,10,10))


------------------------------------------------------------------------------------------------
Função construtora


function Car (brand, price){
    this.brand = brand
    this.price = price
}

const civic = new Car('honda', 130)
const hb20 = new Car('hyundai', 80)

console.log(civic)
console.log(hb20)
---------------------------------------------------------------------------
Classes

class Car {
    constructor(brand,price=99){
        this.brand = brand
        this.price = price
    }
    run(){
console.log('Acelerando')
    }
}
const civic = new Car('honda')
console.log(civic.price)

---------------------------------------------------------------------------
Get Set

class Person {
    constructor(name){
        this._name= name
    }
    get name(){
        return this._name
    }
    set name (newName) {
        this._name = newName
    }
}
const person = new Person('gabriel belloni')
person.name = 'mateus'
console.log(person.name)
---------------------------------------------------------------------------
Metodo estatito

 class Calculator {
     static sum(a,b){
       return a+b
     }
 }
 console.log(Calculator.sum(10,9))


class Person {
    constructor(firstName, secondName){
        this.firstName = firstName
        this.secondName= secondName
    }
    get fullName(){
        return Person.joinNames(this.firstName,this.secondName)
    }
        static joinNames(firstName, secondName){
        return `${firstName} ${secondName}`
        }
}

const person = new Person('gabriel', 'belloni')
console.log(person.fullName)
------------------------------------------------------------------------------------------------
Herança 



class Veiculo {
    constructor(rodas){
        this.rodas = rodas
    }

    Acelerando(){
        console.log('Acelerando')
    }
}

class Moto extends Veiculo {
    constructor(rodas, capacete){
        super(rodas)
        this.capacete = capacete
    }
    empinar() {
        console.log(`empinou com ${this.rodas} rodas`)
    }

    usandoCapacete(){
        console.log(this.capacete)
    }
}

const bross = new Moto(2, true)

bross.Acelerando()
bross.usandoCapacete()

------------------------------------------------------------------------------------------------
*/

console.log('hello world')