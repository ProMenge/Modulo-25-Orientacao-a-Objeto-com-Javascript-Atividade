// Classe base (abstração) Pokemon
function Pokemon(especie, forte, fraqueza) {
    this.especie = especie;
    this.forte = forte;
    this.fraqueza = fraqueza;
    this.dizEspecie = function () {
        console.log("Eu sou um " + this.especie);
    }
}

// Classe Eletrico, herdeira de Pokemon
function Eletrico(especie) {
    Pokemon.call(this, especie, "Voador e Água", "Terrestre");
    this.tipo = "Elétrico";
    this.dizDesVantagens = function () {
        console.log(`Sou do tipo ${this.tipo}, sou fraco contra: ${this.fraqueza} e forte contra ${this.forte}`);
    }
}

// Classe Fogo, herdeira de Pokemon
function Fogo(especie) {
    Pokemon.call(this, especie, "Planta, Gelo, Metal e Fada", "Água, Pedra e Dragão");
    this.tipo = "Fogo";
    this.dizDesVantagens = function () {
        console.log(`Sou do tipo ${this.tipo}, sou fraco contra: ${this.fraqueza} e forte contra ${this.forte}`);
    }
}

// Classe Agua, herdeira de Pokemon
function Agua(especie) {
    Pokemon.call(this, especie, "Fogo, Terrestre e Pedra", "Planta e Elétrico");
    this.tipo = "Água";
    this.dizDesVantagens = function () {
        console.log(`Sou do tipo ${this.tipo}, sou fraco contra: ${this.fraqueza} e forte contra ${this.forte}`);
    }
}

// Classe Planta, herdeira de Pokemon
function Planta(especie) {
    Pokemon.call(this, especie, "Água, Terrestre e Pedra", "Fogo, Gelo, Veneno, Voador e Inseto");
    this.tipo = "Planta";
    this.dizDesVantagens = function () {
        console.log(`Sou do tipo ${this.tipo}, sou fraco contra: ${this.fraqueza} e forte contra ${this.forte}`);
    }
}

// Criando instâncias de cada tipo
const pikachu = new Eletrico("Pikachu");
const charmander = new Fogo("Charmander");
const squirtle = new Agua("Squirtle");
const bulbasaur = new Planta("Bulbasaur");

// Chamando os métodos para cada instância
pikachu.dizEspecie();
pikachu.dizDesVantagens();

charmander.dizEspecie();
charmander.dizDesVantagens();

squirtle.dizEspecie();
squirtle.dizDesVantagens();

bulbasaur.dizEspecie();
bulbasaur.dizDesVantagens();

// Listando os valores dos objetos
console.log(Object.values(pikachu));
console.log(Object.values(charmander));
console.log(Object.values(squirtle));
console.log(Object.values(bulbasaur));

//confesso estar meio confuso ainda