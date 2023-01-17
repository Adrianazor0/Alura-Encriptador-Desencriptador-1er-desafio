var textoEncriptar = document.getElementById("texto");
var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var parrafoResultado = document.getElementById("resultado");
var pantallaNoResultado = document.getElementById("no-resultado");
var pantallaResultado = document.getElementById("pantalla-resultado");
var botonCopiar = document.getElementById("boton-copiar");

function mostrar(resultado) {
    parrafoResultado.innerHTML = resultado;

    pantallaNoResultado.classList.add("ocultar"); 

    pantallaResultado.classList.remove("ocultar"); 
    botonCopiar.classList.remove("ocultar"); 

    textoEncriptar.value = "";

}

function ocultar() {
    pantallaNoResultado.classList.remove("ocultar");

    pantallaResultado.classList.add("ocultar"); 
    botonCopiar.classList.add("ocultar"); 

    parrafoResultado.innerHTML = "";

    return
}

botonEncriptar.onclick = function encriptar(){
    if (textoEncriptar.value == ""){
        ocultar();
    } else {
        var texto = textoEncriptar.value.split('');
    
        for(var i = 0; i < texto.length; i++){
            if (texto[i] == "a"){
                texto[i] = "enter";
            }  
            else if (texto[i] == "e"){
                texto[i] = "imes";
            }  
            else if (texto[i] == "i"){
                texto[i] = "ai";
            }
            else if (texto[i] == "o"){
                texto[i] = "ober";
            }
            else if (texto[i] == "u"){
                texto[i] = "ufat";
            }      
        }
    
        return mostrar(texto.join("").toString())
    }
    
}

botonDesencriptar.onclick = function desencriptar(){
    if (textoEncriptar.value == ""){
        ocultar();
    } else {
        var texto = textoEncriptar.value.split('');
        
        for(var i = 0; i < texto.length; i++){
            if (texto[i] == "e"){
                texto.splice(i, 5, "a");
            }  
            else if (texto[i] == "i"){
                texto.splice(i, 4, "e");
            }  
            else if (texto[i] == "a"){
                texto.splice(i, 2, "i");
            }
            else if (texto[i] == "o"){
                texto.splice(i+1, 3);
            }
            else if (texto[i] == "u"){
                texto.splice(i+1, 3);
            }      
        }
}

    return mostrar(texto.join("").toString())
}

botonCopiar.onclick = function copiarTexto() {
    var textoCopiado = parrafoResultado.innerHTML;
    navigator.clipboard.writeText(textoCopiado);
    parrafoResultado.innerHTML = "Texto copiado!";
  }