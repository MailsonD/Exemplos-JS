

/*
Neste exemplo iremos utilizar dos seguintes recursos de Js:
1. Eventos de interação com o usuário
2. Armazenamento Local utilizando localstorage
3. Orientação a objeto (Que não é bem orientação a objeto)
4. Serialização de objetos com JSON
5. Manipulação de atributos HTML e CSS com js
*/

/*
Para iniciar a solução do nosso problema, primeiro vamos ver o que é necessário.
Temos um formulario de dados, que precisam ser armazenados em algum lugar, 
em conjunto, pois os dados são referentes a um único usuário, e depois disso devem
ser listados dentro de uma tabela; 

Vamos dividir agora nosso problema em partes. Primeiro, 
precisaremos de uma estrutura pra agrupar os dados de cada usuário.
Com variáveis primitivas da linguagem não temos uma estrutura ideal para isso.
A solução ideal seria criar uma estrutura de classe para o uso de orientação a objeto,
prém, a oriêntação a objeto de Js, é bastante fllexível, e essa flexibilidade trás 
diversos problemas (É mais bagunçado que o universo da DC no cinema).

Tendo isso em mente, o Js disponibilizam algumas formas mais simples de se criar objetos,
sem necessítar do uso de uma classe diretamente (Isso facilita um pouco sua vida, 
porém se você não souber usar bem, pode pirar sua vida muito mais).
*/

/*
Vamos mostrar 3 formas de se criar objetos em js e apartir daí vc escolhe a menos bagunçada pra você
poder utilizar dela.
*/

/************************************/
//INSTANCIANDO SEM DEFINIR ATRIBUTOS//
/************************************/

let disciplina = new Object();

//A palavra reservada new serve para definir uma nova instância em memória daquele objeto
//Quando utilizandos new Object, definimos que o tipo daquela variável é object;
//Podemos utilziar da função typeof para sabermos qual o tipo de uma variável 
//naquele momento da execução. Tente descomentar a linha de baixo e visualizar o console;
//console.log(typeof(disciplica));

//Após instanciar a variável como objeto, podemos definir seus atributos com o préfixo de '.'(Ponto);
//Ex:
disciplina.nome = "Linguagem de Script";
disciplina.professor = "Zezin";
//console.log(disciplina);



/**********************************/
//*********** ESTRUCTS ***********//
/**********************************/



/**********************************/
//********* GLOBAL SCOPE *********//
/**********************************/

pessoas = [];


/**********************************/
//********* MY FUNCTIONS *********//
/**********************************/

function carregar(){

}

function listar(){

}

function salvar(){

}

function excluir(){

}