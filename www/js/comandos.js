let somar = document.getElementById("somar");

let subtrair = document.getElementById("subtrair");

let dividir = document.getElementById("dividir");

let multiplicar = document.getElementById("multiplicar");

let valor1 = document.getElementById("valor1");

let valor2 = document.getElementById("valor2");

somar.addEventListener("click", function(){
 let resultado = parseInt(valor1.value) + parseInt(valor2.value);

      document.getElementById("resultado").value = resultado;
    mudarCor(resultado);

    document.getElementById("usoma").textContent = resultado;

    document.getElementById("somaanterior").innerHTML += "<p  class='itemsoma'>" + resultado + "</p>";

    let itemsoma = document.getElementsByClassName("itemsoma");
   
 });

subtrair.addEventListener("click", function(){
	let resultado = parseInt(valor1.value) - parseInt(valor2.value);

      document.getElementById("resultado").value = resultado;
    mudarCor(resultado); 

    document.getElementById("usub").textContent = resultado;

    document.getElementById("subanterior").innerHTML += "<p class='itemsub'>" + resultado + "</p>";

    let itemsub = document.getElementsByClassName("itemsub");

});

dividir.addEventListener("click", function(){
	let resultado = parseInt(valor1.value) / parseInt(valor2.value);

    document.getElementById("resultado").value = resultado;
    mudarCor(resultado);  

    document.getElementById("udiv").textContent = resultado;

    document.getElementById("divanterior").innerHTML += "<p class='itemdiv'>" + resultado + "</p>";

    let itemdiv = document.getElementsByClassName("itemdiv");

});

multiplicar.addEventListener("click", function(){
	let resultado = parseInt(valor1.value) * parseInt(valor2.value);

    document.getElementById("resultado").value = resultado;
    mudarCor(resultado);  

    document.getElementById("umult").textContent = resultado;

    document.getElementById("multanterior").innerHTML += "<p class= 'itemmult'>" + resultado + "</p>";

    let itemmult = document.getElementsByClassName("itemmult");

});

function mudarCor(result){
    if (result < 0) {
        document.getElementById("resultado").style.color = "#F00";
    } else {
        document.getElementById("resultado").style.color = "#09f628";
    } 
} 
