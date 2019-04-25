//Trabalhando com variáveis

let nome = "Zé";
var sobrenome = "das Couves";

//Vemos aqui duas maneiras de se declarar uma variável;
//Ambas funcionam perfeitamente, e muito parecidas uma com a outra, porém, elas possuem um pequeno detalhe com relação a escopo
//Variaveis criadas com var, elas podem ser declaradas, dentro ou fora de um bloco, que poderão ser usadas da mesma forma
//Ex:
/*
if(idade>=18){
	var resultado = "A coluna já doi";
}
console.log(resultado);
*/
//Mesmo após o fim do bloco, a variavél ainda existe e ainda pode ser utilizada, o que pode ajudar ou gerar alguns conflitos as vezes
//Para isso surgiu o let
//Ex:
/*
if(idade>=18){
	let resultado = "A coluna já doi";
	console.log(resultado);
}
*/
//Se eu quisesse acessar a variável resultado fora do bloco declarado para o if, eu teria que declará-la antes do bloco se inciciar


//Concatenando Strings

alert("Seu nome é "+nome+" "+sobrenome);
