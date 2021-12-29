// EXEMPLO 1
// CRIAR CLASSE COM MÉTODOS

class Retangulo {
  constructor(altura, largura) {
    this.altura = altura; this.largura = largura;
  }
  get area() {
    return this.calculaArea()
  } 

  calculaArea() {
      return this.altura * this.largura;
  }
}

const retangulo = new Retangulo(2,4)

console.log(retangulo.area) // 8

// EXEMPLO 2
// MÉTODOS ESTÁTICOS

class Ponto {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  static distancia(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;

      return Math.hypot(dx, dy);
  }
}

const p1 = new Ponto(5, 5);
const p2 = new Ponto(5, 10);

console.log(p1.distancia); //undefined
console.log(p2.distancia); //undefined

console.log(Ponto.distancia(p1, p2)); // 5

//EXEMPLO 3
//Empacotando com protótipos e métodos estáticos


class Animal {
  falar() {
    return this;
  }
  static comer() {
    return this;
  }
}

let obj = new Animal();
console.log(obj.falar); // function falar()
let falar = obj.falar;
console.log(falar()); // undefined

console.log(Animal.comer()); // class Animal
let comer = Animal.comer;
console.log(comer()); // undefined


function Animal_2() { }

Animal_2.prototype.falar = function() {
  return this;
}

Animal_2.comer = function() {
  return this;
}

let obj_2 = new Animal_2();
let falar_2 = obj_2.falar;
console.log(falar_2()); // objeto global

let comer_2 = Animal_2.comer;
console.log(comer_2()); // objeto global

//EXEMPLO 4
// SUBCLASSES COM O EXTENDS


class Animal_3 {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(this.nome + ' emite um barulho.');
  }
}


class Cachorro extends Animal_3 {
  falar() {
    console.log(this.nome + ' latidos.');
  }
}

const cachorro = new Cachorro('Mat'); //Mat latidos.
cachorro.falar();

//extends em "classes" baseadas em funções tradicionais

function Animal_4 (nome) {
  this.nome = nome;
}

Animal_4.prototype.falar = function() {
   console.log(this.nome + ' faça barulho.');
}

class Cachorro_2 extends Animal_4 {
  falar() {
    console.log(this.nome + ' lati.');
  }
}

let cachorro_2 = new Cachorro_2('Mitzie');
cachorro_2.falar(); // Mitzie lati.


//classes não extendem objetos normais
//Para herdar de um objeto, é necessário utilizar Object.setPrototypeOf()

let Animal_5 = {
  falar() {
     console.log(this.nome + ' faça barulho.');
  }
};

class Cachorro_3 {
  constructor(nome) {
     this.nome = nome;
  }
}

Object.setPrototypeOf(Cachorro_3.prototype, Animal_5);

let cachorro_3 = new Cachorro_3('Odin');
cachorro_3.falar(); //Odin faça barulho.

//Exemplo 5 
//Species

class MinhaArray extends Array {
  // Sobrescreve species para o construtor da classe pai Array
  static get [Symbol.species]() { return Array; }
}

let a = new MinhaArray(1,2,3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MinhaArray); // false
console.log(mapped instanceof Array); // true


//Exemplo 6 
//Chamada da classe pai com super

class Gato {
  constructor(nome) {
     this.nome = nome;
  }

  falar() {
     console.log(this.nome + ' faça barulho.');
  }
}

class Leao extends Gato {
  falar() {
     super.falar();
     console.log(this.nome + ' ruge.');
  }
}

let leao = new Leao('Fuzzy');
leao.falar();

// Fuzzy faça barulho.
// Fuzzy roars.


//Exemplo 7
//Mix-ins

class Humano {
  constructor(nome) {
    this.nome = nome;
  }
  andar() {
    return this.nome+' andou um passo'
  }
}

const HumanoFalante = Base => class extends Base {
  falar() {
    return this.nome+' diz: olá mundo!'
  }
}

const HumanoFalanteMixado = Base => class extends Base {}

const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano))

const humano = new HumanoFinal('Bill Gates')

console.log(humano.andar()) // Bill Gates andou um passo
console.log(humano.falar()) // Bill Gates diz: olá mundo!



