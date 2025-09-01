const AnaliseDeDados = require("../src/analiseDeDados");

describe("Testes da classe AnaliseDeDados", () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([1, 2, 2, 3, 4, 5]);
  });

  test("Adicionar novos dados corretamente", () => {
    analise.adicionarDados([6, 7]);
    expect(analise.dados).toEqual([1, 2, 2, 3, 4, 5, 6, 7]);
  });

  test("Limpar os dados", () => {
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });

  test("Ordenar os dados corretamente", () => {
    expect(analise.ordenarDados()).toEqual([1, 2, 2, 3, 4, 5]);
  });

  test("Calcular a média corretamente", () => {
    expect(analise.calcularMedia()).toBeCloseTo(2.833, 3);
  });

  test("Calcular a mediana corretamente", () => {
    expect(analise.calcularMediana()).toBe(2.5);
  });

  test("Calcular a moda corretamente", () => {
    expect(analise.calcularModa()).toEqual([2]);
  });

  test("Calcular a variância corretamente", () => {
    expect(analise.calcularVariancia()).toBeCloseTo(1.8055555555555554, 6); // Precisão ajustada
  });

  test("Calcular o desvio padrão corretamente", () => {
    expect(analise.calcularDesvioPadrao()).toBeCloseTo(1.3437096247164249, 6); // Precisão ajustada
  });

  test("Encontrar o valor mínimo", () => {
    expect(analise.encontrarMinimo()).toBe(1);
  });

  test("Encontrar o valor máximo", () => {
    expect(analise.encontrarMaximo()).toBe(5);
  });

  test("Normalizar os dados corretamente", () => {
    expect(analise.normalizarDados()).toEqual([0, 0.25, 0.25, 0.5, 0.75, 1]);
  });

  test("Calcular percentil corretamente", () => {
    expect(analise.calcularPercentil(50)).toBe(2.5);
  });

  test("Calcular a soma dos dados", () => {
    expect(analise.calcularSoma()).toBe(17);
  });

  test("Calcular o produto dos dados", () => {
    expect(analise.calcularProduto()).toBe(240);
  });

  test("Calcular a amplitude dos dados", () => {
    expect(analise.calcularAmplitude()).toBe(4);
  });

  test("Calcular o coeficiente de variação", () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(47.425, 3); // Precisão ajustada
  });

  test("Remover outliers corretamente", () => {
    const analiseOutliers = new AnaliseDeDados([1, 2, 2, 3, 4, 100]);
    analiseOutliers.removerOutliers();
    expect(analiseOutliers.dados).toEqual([1, 2, 2, 3, 4]);
  });

  test("Calcular a correlação com outro conjunto corretamente", () => {
    const outro = [2, 4, 4, 6, 8, 10];
    const correlacao = analise.calcularCorrelacao(outro);
    expect(correlacao).toBe(1); // Alterado para 1, pois a correlação entre os dois conjuntos será perfeita
  });

  test("Métodos com dados vazios devem retornar null", () => {
    const vazia = new AnaliseDeDados();
    expect(vazia.calcularMedia()).toBeNull();
    expect(vazia.calcularMediana()).toBeNull();
    expect(vazia.calcularModa()).toBeNull();
    expect(vazia.calcularVariancia()).toBeNull();
    expect(vazia.calcularDesvioPadrao()).toBeNull();
    expect(vazia.encontrarMinimo()).toBeNull();
    expect(vazia.encontrarMaximo()).toBeNull();
    expect(vazia.calcularPercentil(50)).toBeNull();
  });
});
