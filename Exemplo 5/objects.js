
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
// console.log(disciplina); //Experimento visualizar no console


/**********************************/
//INSTANCIANDO DEFININDO ATRIBUTOS//
/**********************************/

//Digamos que agora queiramos fazer o que fizemos no exemplo anterios, só que de uma vez só;
//É possível realizar a criação de um objeto já atribuindo seus valores
//EX:
let disciplina2 = {
	nome:"Estrutura de dados",
	professor:"Zé pequeno"
};
//console.log(disciplina2); //Experimento visualizar no console

/****************************************/
//INSTANCIANDO UMA ESTRURUA PRÉ DEFINIDA//
/****************************************/

/*
Digamos que eu queria agora instanciar uma mesmoa estrutura diversas vezes 
(Que é como deveria funcionar realmente a orientação a objeto).
É possível fazer isso, porém de uma forma um pouquinho estranha.
Na oriêntação a objeto, temos uma coisa chamada funções construtoras (Equivalente a init). 
elas recebem alguns parâmetros e retornam um objeto já criado pra você manipular.
Bom, dá pra fazer isso daqui, porêm a sintaxe pode ser meio confusa.
Vamos ver na prática:
*/

function Disciplina(nome,professor){
	//O this aqui é equivalente ao self, em Python
	this.nome = nome;
	this.professor = professor;
	//Definindo um atributo de obejto como uma função;
	//Digamos que você queira que determinado objeto tenha uma função própria, 
	//e que ela possa ser acessada fora do objeto;
	//É necessário criar o atributo e dizer que este atributo será uma função, igualando ele a uma função
	//e ao mesmo tempo implementando o corpo desta função; 
	this.descricao = function(){
		return "O professor "+this.professor+
		" é quem ministra a disciplina "+this.nome+"!";
	}

}

//Como boa prŕatica de orientação a objeto, é sempre aconselhado começar o nome de 
//uma "classe" com letra uppercase

let disciplina3 = new Disciplina("Mágica programacional","Fábio Pai");

// console.log(disciplina3); //Experimento visualizar no console
// console.log(disciplina3.descricao()); //Experimento visualizar no console

/*
Dá pra notar que nenhuma das 3 formas é bonita de se usar, porém é o que temos;
Js disponibilizou com o tempo a possibilidade de criar classes um pouco melhor estruturadas, 
porém não sei se o esforço de utilizar uma classe compensa aqui nessa linguagem;
Pasa se usar js com uma oriêntação descentem tempos TypeScript, que é uma linguagem mais avançada; 
Apartir daqui iremos utilizar objetos com estruturas pré definidas (Que a meu ver é a menos pior)!
*/