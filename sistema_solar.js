function Corpoceleste(nome, massa, raio) {
    this.nome = nome;
    this.massa = massa;
    this.raio = raio;
}

function Planeta(nome, massa, raio, numeroDeLuas) {
    Corpoceleste.call(this, nome, massa, raio);
    this.numeroDeLuas = numeroDeLuas;
}

function Estrela(nome, massa, raio, temperatura) {
    Corpoceleste.call(this, nome, massa, raio);
    this.temperatura = temperatura;
}

const Terra = new Planeta("Terra", 5.972e24, 6371, 1);
const Sol = new Estrela("Sol", 1.989e30, 696340, 5778);
const Marte = new Planeta("Marte", 6.39e23, 3389, 2);

console.log(Terra);
console.log(Sol);
console.log(Marte);

