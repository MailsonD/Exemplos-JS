//Trabalhando com funções

//Funções em JavaScript são bem simples e bastante práticas

/*
A palavra function, obviamente é o que define uma função;
Pelo fato de JS ser uma linguagem de tipagem fraca (Que não possui definição de tipo na criação de variável)
suas funções também não precisam definir um tipo de retorno. Assim como elas podem ou não retornar algo, funcionando semelhante a procedimentos em C.
*/

/*
E caso eu queira receber parámetros na minha função? Simples, basta por o nome da variável entre os parenteses;
Ex:
function soma(numero1,numero2){
	console.log(numero1+nomero2);
}
Que tipo de variável eu posso passar por parâmetro para uma função? Qualquer tipo de variável, desde um inteiro, a um array inteiro ou um objeto
*/

function exibir(){
	let resultado = "Olha que coisa fácil";
	return resultado;
}

/*
Tente executar essa função pelo console do seu navegador;
Basta apertar F12 na página que importa este arquivo Js, selecionar a aba de console, e digitar lá o nome da função como uma chamada normal
Ex: exibir();
Isso trará o retorno da função 
*/