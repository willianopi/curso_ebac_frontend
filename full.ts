//funcão para retornar Olá+nome
function saudacao(nome: string,): string {
    return `Olá ${nome}`;
};
const seuNome = "Willian";
const saudacaoSeuNome = saudacao(seuNome);
console.log(saudacaoSeuNome);


//funcao para calcular uma area
function calcularArea (base: number, altura: number): number {
    const area = base * altura;
    return area;
};
const resultado = calcularArea(178, 2.37);
console.log(resultado);
