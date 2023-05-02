const validaValor = (v1, v2) => {
  if (v1.length === 0 || v2.length === 0) {
    throw new Error('Preencha os campos para realizar a soma');
  }
};

const verificaValorNum = (v1, v2) => {
  if (Number.isNaN(Number(v1)) || Number.isNaN(Number(v2))) {
    throw new Error('Informe dois números para realizar a soma');
  }
};

function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;

  validaValor(value1, value2);
  verificaValorNum(value1, value2);

  const result = Number(value1) + Number(value2);
  return result;
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  try {
    const result = calculateSum();
    displayResult(result);
  } catch (error) {
    displayResult(error.message);
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
