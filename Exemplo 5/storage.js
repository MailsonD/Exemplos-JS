/*
Aqui iremos demonstrar como funciona o armazenamento local.
JavaScript disponibiliza uma ferramenta nativa da linguamge chamada de localstorage
que funciona pegando alguns dados do tipo Chave-valor e salva eles através do seu navegador na sua máquina.
Esses dados ficam armazenados no seu computador indepentende de você fehcar o navegador ou desligar o computador,
porém, para que esses dados não se acumulem com o tempo, eles tem um tempo de validade e após espirar eles são
apagados automaticamente.

Mas como funciona estrutura chave valor?
Fácil, Eu tenho uma String (chave) que ao utilizar dela, eu irei receber uma determinada 
String (valor) asociada ao primeiro valor;
Ex: Chave: exemplo@gmail.com | Valor: nomeExemplo;
Mas como salvar dados no localstorage?
E como acessar esses dados depois?

O localstorage tem 4 métodos simples de se utilizar que fazem tudo que você precisa

localStorage.setItem()
Salva uma determinado item com sua chave

localStorage.getItem()
Pega um item utilziando sua chave

localStorage.removeItem()
Apaga um item através da chave

localStorage.clear()
Apaga tudo que está no localstorage
*/

//Vamos tentar salvar o seu nome no localstorage
//e após isso vamos recuperá-lo
//Execute os comandos abaixo no console, de preferência, 
//para facilitar a visualização
//EX:
//localStorage.setItem("nome","meuNome");
//localStorage.getItem("nome");

//Experimente agora fehcar o navegador e reabrir a página
//Após isso, experimente usar o getItem novamente; O item ainda estará lá

//Agora tente apagar o nome do localStorage;
//EX:
//localStorage.removeItem("nome");

/*
Como você deve ter notado, na linha 10, eu disse que a chave e o valor eram String.
Mas e se eu quiser colocar algo diferente, tipo numeros ou até mesmo objetos. 
Bom, para isso será necessário fazer um cast sempre que for pegar o valor do localstorage, 
e alguns casos quando for salvar também;

Com valores primitivos como int, é mais fácil, pois a linguagem já proporciona o cast, mas e 
se for um objeto que você criou?
Ou até mesmo um array?

É aí onde entra uma das primeiras utilidades de JSON com javaScript. Como JSON é sempre String,
podemos converter nosso obejto para JSON (Se você olhar com calma a estrutura de um objeto em js,
perceberá que é bem parecido com a estrutura de JSON), pois aí sim poderemos armazenar o objeto no localStorage;

Para facilitar o trabalho com objetos nesse quesito, vou disponibilizar duas funções prontas já para converter de 
objeto para JSON, e de JSON para objeto.
*/

function setObjectLocalStorage(key,value){
	localStorage.setItem(key, JSON.stringify(value));
}

//funciona exatamente igual as funções nativas o localStorage, porém aqui você pode enviar um
//objeto como parâmetro

function getObjectLocalStorage(key){
	var value = localStorage.getItem(key);
    return JSON.parse(value);
}