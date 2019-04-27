
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
	pessoas = getObjectLocalStorage("pessoas");
	let tabela = document.getElementById("dataTable");
	if(pessoas!=null && pessoas.length>0){	
		tabela.removeAttribute("hidden");
		tabela.innerHTML = "";
		for(let i in pessoas){
			let pessoa = pessoas[i];

			let tr = document.createElement("tr");
			let tdCpf = document.createElement("td");
			let tdNome = document.createElement("td");

			tdCpf.innerHTML = pessoa.cpf;
			tdNome.innerHTML = pessoa.nome;

			tr.appendChild(tdCpf);
			tr.appendChild(tdNome);
			tabela.appendChild(tr);
		}
	}else if(pessoas==null){
		pessoas = [];
		tabela.setAttribute("hidden",true);
	}
}

function salvar(){
	let cpf = inputCpf.value;
	let nome = inputNome.value;
	let pessoa = new Pessoa(cpf,nome);
	pessoas.push(pessoa);
	setObjectLocalStorage("pessoas",pessoas);
	carregar();
}

function doItRed(event){
	let btn = event.target;
	btn.style.color = "red";
}

function doItNormal(event){
	let btn = event.target;
	btn.style.color = "black";
}

function excluir(){

}