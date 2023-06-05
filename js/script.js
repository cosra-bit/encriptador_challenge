function encriptar (){
    var texto = document.querySelector("#entradatexto").value;
    var textoencriptado = texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".salidatexto").value = textoencriptado;
    document.querySelector("#entradatexto").value;
    }



var botonencriptar = document.querySelector(".botonencriptar"); botonencriptar.onclick = encriptar;
function desencriptar (){ 
    var texto = document.querySelector("#entradatexto").value; 
    var textoencriptado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".salidatexto").value = textoencriptado; 
    document.querySelector("#entradatexto").value;
    
}
    
var botondesencriptar = document.querySelector(".botondesencriptar"); botondesencriptar.onclick = desencriptar;

/*
function copiar(){
    navigator.clipboard.writeText(salidatexto.value);
}
*/