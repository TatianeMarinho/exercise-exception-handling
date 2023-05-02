const value1 = document.getElementById('value1').value;
const value2 = document.getElementById('value2').value;

const validaValor = () => {
  if (value1.length === 0 || value2.length === 0) {
    throw new Error('Preencha os campos para realizar a soma');
  }
};

function calculateSum() {
  try {
    validaValor();
    const result = Number(value1) + Number(value2);
    return result;
  } catch (error) {
    return error.message;
  }
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  const result = calculateSum();
  displayResult(result);
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
