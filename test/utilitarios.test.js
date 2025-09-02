const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
  let utils;

  beforeEach(() => {
    utils = new Utilitarios();
  });

  // Strings
  test('Inverte uma string corretamente', () => {
    expect(utils.inverterString('abc')).toBe('cba');
  });

  test('Conta os caracteres de uma string', () => {
    expect(utils.contarCaracteres('exemplo')).toBe(7);
  });

  test('Converte string para maiúsculas', () => {
    expect(utils.paraMaiusculas('texto')).toBe('TEXTO');
  });

  test('Converte string para minúsculas', () => {
    expect(utils.paraMinusculas('TEXTO')).toBe('texto');
  });

  test('Coloca a primeira letra em maiúscula', () => {
    expect(utils.primeiraLetraMaiuscula('exemplo')).toBe('Exemplo');
  });

  test('Remove espaços nas extremidades da string', () => {
    expect(utils.removerEspacos('  teste  ')).toBe('teste');
  });

  test('Repete o texto o número de vezes indicado', () => {
    expect(utils.repetirTexto('x', 3)).toBe('xxx');
  });

  test('Conta corretamente as palavras em uma string', () => {
    expect(utils.contarPalavras('um dois três')).toBe(3);
  });

  // Números
  test('Soma dois números corretamente', () => {
    expect(utils.somar(2, 3)).toBe(5);
  });

  test('Subtrai dois números corretamente', () => {
    expect(utils.subtrair(10, 4)).toBe(6);
  });

  test('Multiplica dois números corretamente', () => {
    expect(utils.multiplicar(3, 4)).toBe(12);
  });

  test('Divide dois números corretamente', () => {
    expect(utils.dividir(8, 2)).toBe(4);
  });

  test('Lança erro ao dividir por zero', () => {
    expect(() => utils.dividir(5, 0)).toThrow('Divisão por zero');
  });

  test('Verifica se um número é par', () => {
    expect(utils.ehPar(6)).toBe(true);
    expect(utils.ehPar(7)).toBe(false);
  });

  test('Verifica se o valor é um número válido', () => {
    expect(utils.ehNumero(123)).toBe(true);
    expect(utils.ehNumero('abc')).toBe(false);
  });

  // Arrays
  test('Retorna o primeiro elemento do array', () => {
    expect(utils.primeiroElemento([10, 20, 30])).toBe(10);
  });

  test('Retorna o último elemento do array', () => {
    expect(utils.ultimoElemento([10, 20, 30])).toBe(30);
  });

  test('Retorna o tamanho do array', () => {
    expect(utils.tamanhoArray([1, 2, 3, 4])).toBe(4);
  });

  test('Ordena um array corretamente', () => {
    expect(utils.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('Inverte um array corretamente', () => {
    expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('Junta os elementos do array com separador', () => {
    expect(utils.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
  });

  test('Calcula a média dos valores do array', () => {
    expect(utils.mediaArray([4, 6])).toBe(5);
  });

  test('Retorna 0 ao calcular média de array vazio', () => {
    expect(utils.mediaArray([])).toBe(0);
  });

  test('Remove elementos duplicados do array', () => {
    expect(utils.removerDuplicados([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  // Extras
  test('Verifica se uma string é palíndromo', () => {
    expect(utils.ehPalindromo('arara')).toBe(true);
    expect(utils.ehPalindromo('teste')).toBe(false);
  });

  test('Mescla dois objetos corretamente', () => {
    const obj1 = { x: 1, y: 2 };
    const obj2 = { y: 3, z: 4 };
    expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ x: 1, y: 3, z: 4 });
  });

  test('Gera número aleatório dentro do limite', () => {
    const numero = utils.gerarNumeroAleatorio(10);
    expect(numero).toBeGreaterThanOrEqual(0);
    expect(numero).toBeLessThan(10);
  });
});
