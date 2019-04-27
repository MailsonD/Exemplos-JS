
/**********************************/
//*********** ESTRUCTS ***********//
/**********************************/

function Pessoa(cpf,nome){
	this.cpf = cpf;
	this.nome = nome;
}

/**********************************/
//********* GLOBAL SCOPE *********//
/**********************************/

pessoas = [];


/**********************************/
//********* MY FUNCTIONS *********//
/**********************************/

function carregar(){
	//Recupero o array do localstorage com a lista de pessoas
	pessoas = getObjectLocalStorage("pessoas");
	let tabela = document.getElementById("dataTable");
	//Se pessoas for null, quer dizer que não existia nenhum item no localstorage com o nome "pessoas";
	//ou seja, o array não foi salvo nenhuma vez lá;
	if(pessoas!=null && pessoas.length>0){
		//se existe algo no array, então eu posso deixar a tabela vissível;	
		tabela.removeAttribute("hidden");
		tabela.innerHTML = "";
		//eu zero a tabela anterior para construir a nova
		//e utilizando um for-in eu rodo todos os elementos do array
		for(let i in pessoas){
			//para cada elemento eu pego a pessoa que está la dentro e adiciona ela a tabela;
			let pessoa = pessoas[i];

			/*
			Em js é possível criar elementos a partir do nome de sua tag.
			então vc poderá manipulá-los a sua vontade;
			*/

			let tr = document.createElement("tr");
			let tdCpf = document.createElement("td");
			let tdNome = document.createElement("td");

			tdCpf.innerHTML = pessoa.cpf;
			tdNome.innerHTML = pessoa.nome;

			/*
			A função de appendChild serve para adicionar um novo elemento filho dentro de um elemento pai;
			Ex: digamos que eu tenha a seguinte estrutura
			<tr>
				<td>asdasd</td>
			</tr>
			eu tenho um elemento filho td, dentro de um elemento pai tr.
			se eu quiser adicionar outro elemento filho para tr, eu faço uso do appenChild
			o apeendChild sempre irá adicionar o novo elemento filho no fim do corpo do elemento pai.
			Digamos que eu adicione outro td alí naquele exempo com o texto "teste";
			O resultado seria:
			<tr>
				<td>asdasd</td>
				<td>teste</td>
			</tr>
			*/
			tr.appendChild(tdCpf);
			tr.appendChild(tdNome);
			tabela.appendChild(tr);
		}
	}else if(pessoas==null){
		//para que o array não contine null, eu instancio ele novamente como  array;
		pessoas = [];
		//e adiciono um atributo a tag da tabela para deixar ela invisível
		tabela.setAttribute("hidden",true);
	}
}

function salvar(){

	//Aqui eu utilizo a outra forma de se acessar os atributos de um elemento
	//utilizando o id dele, como eu havia mencionado antes
	let cpf = inputCpf.value;
	let nome = inputNome.value;
	//Construo um objeto pessoa com os dados;
	let pessoa = new Pessoa(cpf,nome);
	//Adiciono no array
	pessoas.push(pessoa);
	//E atualizo o array que estava no localStorage
	setObjectLocalStorage("pessoas",pessoas);
	//após isso eu atualizo a tabela de exibição
	carregar();
}

function doItRed(event){
	//O target pega qual foi o elemento que ativou este evento;
	let btn = event.target;
	//agora temos a referência ao botão, e podemos alterá-lo
	btn.style.color = "red";
}

function doItNormal(event){
	let btn = event.target;
	btn.style.color = "black";
}


//Implemente uma função para excluir um registro da tabela de alguma maneira. 
//essa função deverá apagar a linha da tabela e também o registro daquela pessoa do localstorage
function excluir(){

}