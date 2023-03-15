const {soma, subtracao, divisao, multiplicacao, media, area, perimetroQ} = require('./../src/matematica');
const matematica = require('./../src/matematica')

test ('Soma os valores: 10 e 35', () => {
    expect(soma(10, 35)).toBe(45);
});

test ('Subtrai os valores: 35 e 10', () => {
    expect(subtracao(35, 10)).toBe(25);
});

test ('Divide 80 por 4', () => {
    expect(divisao(80, 4)).toBe(20);
});

test ('Multiplica 38 por 3', () => {
    expect(multiplicacao(38, 3)).toBe(114);
});

test ('Calcula a média dos valores: 50, 78, 10', () => {
    expect(media(50, 78, 10)).toBe(46);
});

test ('Calcula area', () => {
    expect(area(1.23, 2)).toBe(2.46);
});

test ('Calcula o perimetro de um quadrado', () => {
    expect(perimetroQ(10, 10)).toBe(40);
});