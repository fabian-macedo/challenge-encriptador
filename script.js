
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

let input= document.getElementById("input-texto");
let input2= document.getElementById("msg");

let buttonE= document.getElementById("btn-encriptar");  
let buttonD = document.getElementById("btn-desencriptar");
let buttonC = document.getElementById("btn-copy");

buttonE.onclick=encriptar;
buttonD.onclick=desencriptar;
buttonC.onclick=copiar;

//var letras=["a","e","i","o","u"];

//var reemplazos=["ichii","nii","san","nya","arigato"];





function encriptar(){
    
    event.preventDefault()
    
    let campo=input.value;

//for (var contador=0;contador<reemplazos.length;contador++){
       
    campo= campo.replace(/a/g, "a!");
    campo= campo.replace(/e/g, "enter");
    campo= campo.replace(/i/g, "imes");
    campo= campo.replace(/o/g, "ober");
    campo= campo.replace(/u/g, "ufat");
    campo= campo.replace(/!/g, "i");

       input2.value=campo;
       
// }
    
}

function desencriptar(){
       event.preventDefault()
       let campo =input.value;
       campo = campo.replace(/ai/g, "a");
       campo = campo.replace(/enter/g, "e");
       campo = campo.replace(/imes/g, "i");
       campo = campo.replace(/ober/g, "o");
       campo = campo.replace(/ufat/g, "u");

       input2.value=campo;
       
       

}


function copiar(){

    input2.select();
    document.execCommand("copy");
    
}

 






