
function botao(){
    document.getElementById("agradecimento").innerHTML = " <b>Obrigado Por Clicar!</b>";

   // console.log (document.getElementById("agradecimento"));
   // alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.youtube.com/"); // abrir uma outra pagina em outra janela 
   // window.location.href = "https://www.youtube.com/"; // abri outra pagina, porém na mesma pagina que está. 
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar Texto");
}

function voltar(elemento){
    elemento.innerHTML = " passar o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("Trocar Texto");
}

function load(){
    alert ("Pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}
/*var nome = "Tuane Mendes";
var idade = 27;
var idade2 = 10;
var frase = "Hoje o dia esta frio! ";

//alert("Bem Vindo! " + nome);
//alert(idade + idade2);
console.log(nome);
console.log(idade - idade2);
console.log(frase.toUpperCase("frio","calor"));
console.log(frase.toLowerCase("frio","calor"));

//alert (frase.replace("frio","calor"))

var lista = ["Maça","Pêra", "Laranja"]
lista.push("Uva"); 
//lista.pop();
console.log(lista);
console.log(lista[1]);

console.log(lista.length);// ver o tamanho da lista 
console.log(lista.toString());
console.log(lista.join("-"));

var fruta = {nome: "maça",cor:" vermelha" }
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);


var frutas = [{nome: "maça",cor:" vermelha" },{nome: "uva",cor:"roxa" }]
console.log(frutas);
alert(frutas[1].nome);


var idade =  prompt("Qual a sua idade ?") // exibe um pergunta para o usuario. 
if(idade >= 18){
    alert("Maior de idade!")
}else{
    alert("Menor de idade!")
}

var count = 0 ;
while(count < 5){
    console.log(count);
    count = count + 1;
}
var count = 0 ;
while(count < 5){
    console.log(count);
    count ++;
}

var count;

for (count = 0;count<= 5 ; count++  ){
    alert(count)
};



// data atual 
var d = Date();
alert(d);

//

var lista = ["Maça","Pêra", "Laranja"];
console.log (lista.push("Uva")); 


var lista = ["Maça","Pêra", "Laranja"]
lista.push("Uva");

var formacoes ;
Alert ("Digital Innovation One:" + formacoes);



function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert (setReplace("Vai Japão","Japão","Brasil"));


// valida  maior e menor idade entre 18 
function validaIdade(idade){
    var validar;
    if(idade>= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade ?")
console.log(validaIdade(idade));
*/

