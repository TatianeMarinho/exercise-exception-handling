# Trybe

Este repositório contém atividades de aprendizagem desenvolvidas por Tatiane Marinho [linkedin](https://www.linkedin.com/in/marinhotatiane/) enquanto estudava na [Trybe](https://www.betrybe.com/).

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.<br>

<details>
  <summary><strong>O que foi desenvolvido</strong></summary><br />

O exercício foi realizado a partir do código que já estavam nos arquivos index.html e script.js.

A aplicação pede à pessoa usuária que informe dois números para realizar uma soma. Esses números são inseridos através dos inputs;

Ao clicar o botão, a função sum é chamada, capturando o valor escrito nos inputs e realizando a operação. Antes, é necessária a conversão do valor usando o Number(), pois ele chega à função em forma de string. Há também outras formas de se converter uma string em um número, como o parseInt() e o parseFloat();

Ao final, a função sum imprime o valor em um parágrafo e limpa os inputs para que a pessoa usuária possa inserir novos valores.

Aparentemente estava tudo funcionando, mas a aplicação não possuía fluxo de exceção. Ou seja, caso ocorra um erro, eles não eram tratados. O que foi resolvido com o exercício.

</details>

<details>
<summary><strong>Dependências</strong></summary><br />
Para instalar as dependências :  - `npm install`

</details>

<details>
  <summary><strong>Linter</strong></summary><br />

Para garantir a qualidade do código, foi utilizado neste projeto o linter `ESLint`.
Desta forma, o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção!
 Foi desenvolvido pela Trybe.

</details>

<details>
<summary><strong>Testes</strong></summary><br />
**Testes desenvolvidos pela Trybe**

Todos os requisitos do projeto foram testados **automaticamente** por meio do `Cypress`. 

## Observações técnicas

Alguns requisitos seguiram um padrão pré-estabelecido para que os testes automáticos funcionem corretamente. 

</details>

<details>
<summary><strong>Estrutura do projeto</strong></summary>

O projeto deverá conter os arquivos index.html e script.js, que conterão seu código HTML e JavaScript, respectivamente.

</details>

<details>
<summary><strong>Habilidades testadas</strong></summary>

Utilizar a tag <script> para inserir código JavaScript na sua página HTML;
Utilizar throw para lançar um erro, na sintaxe throw new Error();
Utilizar try e catch para tentar executar um bloco de código e capturar um erro;
Utilizar finally para executar um comando após o retorno do try ou catch.

</details>

# Requisitos
## Requisito 1 - Lance um erro em caso de input vazio

<details>

<summary> Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo? Caso a pessoa usuária não preencha nenhum input, ou preencha apenas um input, lance um erro.</summary><br/>

**O que será testado:**

- Se um erro é lançado quando os dois campos estão em branco;
- Se um erro é lançado quando só um campo está preenchido;
- Se a mensagem de erro para os dois casos é `Preencha os campos para realizar a soma`;

> **De olho na dica 👀:** Utilize o `throw new Error` e o bloco `try/catch`.

</details>

## Requisito 2 - Lance um erro em caso de valores não numéricos

<details>

<summary> Caso os valores inseridos nos `inputs` pela pessoa usuária não sejam números, lance um erro.</summary><br/>

**O que será testado:**

- Se um erro é lançado quando os dois campos não são preenchidos com valores numéricos;
- Se a mensagem de erro é `Informe dois números para realizar a soma`;
- Não retorna erro quando os dois campos estão com valores numéricos.

> **De olho na dica 👀:** Você pode fazer essa verificação utilizando um combo da função [Number(value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number), que retorna o número convertido para string ou `NaN` caso não consiga fazer a conversão. Em conjunto com a função [Number.isNaN()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), que você pode utilizar para verificar se a conversão feita pela função `Number(value)` foi bem sucedida.

> **De olho na dica 👀:** Lembre-se de que, em JavaScript, para separar a parte inteira da decimal de um número, você deve utilizar o `.`. Exemplo: **1.5**, com ponto, ao invés de **1,5**, com vírgula.

</details>

## Exercício 3 - Apague os inputs ao clicar no botão de realizar a soma

<details>

<summary> Ao clicar no botão para realizar a soma os inputs devem ser apagados.</summary><br/>

**O que será testado:**

- Os valores são apagados após o clique;

> Caso queira, utilize o [finally](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_clause) para apagar os valores dos `inputs` ao final do bloco `try/catch`.

</details>
<br>

*Exercicíos criado pela [Trybe](https://www.betrybe.com/)
