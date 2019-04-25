//TRABALHANDO COM ARRAYS

/*
Relembrando o exemplo de escopo de variáveis de instância, 
eu havia mostrado que uma variável é declarada com let ou var.
Porém, existe mais uma maneira de se instanciar variável, sem nenhum préfixo.
Ao declarar uma variável sem var ou let, você está definindo que aquela variável tem escopo global.
Ou seja, ela será a mesma variável dentro ou fora de uma função... Dentrou ou fora de um bloco... etc.
*/

//Nesse caso aqui declaramos um array;
//Existes duas formas de definir que uma variável será um array;
//Iniciando ela como está abaixo ou com um new
//Ex: meuArray = new Array();

meuArray=[];

/*
Arrays possuem funcionalidades próprias assim como strings para sua manipulação.
funcionalidades bem semlhantes a Python, por exemplo, como push, pop e etc;
*/

//Nesta função, temos o objetivo de adicionar o valor escrito no input para dentro do array;
//Mas como fazer isso?
function escrever(){
	/*
	Primeiro de tudo, e o principal de JS, devemos pegar a 
	referência do elemento que queremos manipular.
	No caso aqui, queremos pegar a referência do Input. Para isso
	usaremos o valor do ID dado para ele. 
	*/
	//Aqui pegamos a referência daquele elemento input, para que possamos pegar o valor dele
	let valorInput = document.getElementById("texto").value;
	// O "document.getElementById("texto")" pega a referência para o elemento inteiro, podendo manipular o mesmo da maneira que desejar
	// o .value, por exemplo, é uma das funcionalidades que se pode utilziar, e obviamente se pega o valor com ele

	/*
	Outra maneira de se pegar a referência para um elemento, é utilizando diretamente o id dele. Como assim?
	Ex: let valorInput = texto.value;
	Aí você me pergunta, pq não usar sempre o meio mais fácil?
	Bom, o meio mais fácil pode haver problemas se vc tiver uma variável no seu código com o mesmo nome do id do elemento.
	Ou se você estiver mexendo com Orientação a objeto pode tornar seu código uma bagunça 
	*/

	//Após ter o valor do input já salvo em uma variável, adicioná-lo ao array é simples
	meuArray.push(valorInput);
}

/*
Após ver como pegar o valor de um elemento HTML, 
vamos ver agora como adicionar algo a um elemento HTML.
Inclusive outras tags.
*/

function mostrar(){
	/*
	Na função anterior, pegamos diretamente o valor do elemento, pq era a unica coisa que nos interessava,
	Aqui, vamos pegar realmente a referência do elemento para que possamos adicionar código a tag
	*/
	let meuParagrafo = document.getElementById("mostrar");
	//Agra que temos o nosso P, podemos adicionar a ele todos os nomes que foram adiconados a nosso array;
	let resultado = "";
	//Fazemos um for para percorrer todo o array, e a cada indice do array, iremos adicionar a string 
	//com o resultado dentro do P, seguido de uma quebra de linha.
	/*
	Imaginando que o usuário digite: foi, vai, irei;
	O código HTML após a execução desta função ficaria:
	<p>
		foi <br/>
		vai <br/>
		irei <br/>
	</p>
	*/
	for (var i = 0; i < meuArray.length; i++){
	 	resultado += meuArray[i]+" <br/>";
	 	//Aqui dentro eu estou gerando a cada nova iteração uma concatenação 
	 	//da palvra com uma quebra de linha, e concatenando tudo isso em uma única variável
	}
	
	//Aqui utilizandos a referência do elemento P para que possamos escrever algo dentro da tag;
	//Para isso utilizamos o innerHTML, quen nos permite adicionar uma String dentro daquela tag;
	//Nesse caso, se a string possuir outras tags HTML, elas tb serão interpretadas e funcionarão normalmente.
	meuParagrafo.innerHTML = resultado;
}

/*
Após entender todo esse exemplo, tente modificar esse código para que o array só receba numeros, 
e ao clicar no botão de mostrar, exiba a média de todos aqueles números;
*/