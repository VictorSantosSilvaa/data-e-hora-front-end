//trabalhando com data e hora
//Algumas funções matemática
//funções matematica
//funções e escopo de variaveis
//Revisao objetos

const horario = document.getElementById('horario');
const dia = document.getElementById('dia');
const diaData = document.getElementById('dia-data');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const random = document.getElementById('random');
//-------------------------------

let dataHora = new Date();
//Dia, mês, ano...

//-------------------------------------
horario.innerText = dataHora;//Data completa
dia.innerText = dataHora.getDay();//Dia
diaData.innerText = dataHora.getDate();//Dia
mes.innerText = dataHora.getMonth() + 1;//Mês completa
//GetMonth começa a contar em 0; 0 a 11...
ano.innerText = dataHora.getFullYear();//ano completa
//atividade
//Mostrar os nomes dos dias da semana e o nome do mes
//De acordo com a data.

//funções matematica

Math.floor();//Arredonda para baixo
Math.random();//Retorna um numero aleatorio entre 0 e 1
Math.round();//Arredonda o num

//gerar numeros aleatorios de 1 a 100

let number = Math.round((Math.random() * 100) +1);
random.textContent = number;