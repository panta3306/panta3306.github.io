    var codigoEncriptado;
    var desencripracion;
    var codetex;

    document.addEventListener('DOMContentLoaded', function() {
      // Tu código aquí
      var copiando = document.getElementById('copiando');
      copiando.style.display = "none";
    });
    
  

    function encripa(codigo){
      codigoEncriptado=codigo.replace(/e/g,"enter");
      codigoEncriptado=codigoEncriptado.replace(/i/g,"imes");
      codigoEncriptado=codigoEncriptado.replace(/a/g,"ai"); 
      codigoEncriptado=codigoEncriptado.replace(/o/g,"ober");
      codigoEncriptado=codigoEncriptado.replace(/u/g,"ufat");
    }

    function desencriptar(codigo){
      desencripracion=codigo.replace(/enter/g,"e");
      desencripracion=desencripracion.replace(/imes/g,"i");
      desencripracion=desencripracion.replace(/ai/g,"a"); 
      desencripracion=desencripracion.replace(/ober/g,"o");
      desencripracion=desencripracion.replace(/ufat/g,"u");
    }

    document.addEventListener("DOMContentLoaded", function() {
        var inputEncriptar = document.getElementById("encrip-code");
        var inputMostrar = document.getElementById("inputcode");
        var imagen = document.getElementById("muneco");
    
        if (inputEncriptar) {
            inputEncriptar.onclick = function() {
                var texareaCode = document.getElementById("myTextarea");
                var texareaValue=texareaCode.value;
                texareaValue = texareaValue.toLowerCase();
                var modtexCode = texareaValue.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if(modtexCode){
                  encripa(modtexCode)
                  inputMostrar.value=codigoEncriptado;
                  imagen.style.display = "none";
                  inputcode.style.height = "465px";
                  inputcode.style.textAlign = "justify";
                  copiando.style.display = "block";
                }
        };
        }
    });

    

  document.addEventListener("DOMContentLoaded", function() {
    var inputDesencritar = document.getElementById("desem-code");
    var inputMostrar = document.getElementById("inputcode");
    var imagen = document.getElementById("muneco");

    if (inputDesencritar) {
          inputDesencritar.onclick = function() {
          var texareaCode = document.getElementById("myTextarea");
          var texareaValue=texareaCode.value;
          if(texareaValue){
            desencriptar(texareaValue);
            inputMostrar.value=desencripracion;
            imagen.style.display = "none";  
            inputcode.style.height = "465px";
            inputcode.style.textAlign = "justify";
            copiando.style.display = "block";
          }
  };
  }
   
  });


  document.addEventListener("DOMContentLoaded", function() {
    var copiarButton = document.getElementById("copiar");
    var desemCodeInput = document.getElementById("inputcode");
    
    if (copiarButton) {
      copiarButton.onclick = function() {
        desemCodeInput.select(); 
        document.execCommand("copy"); 
      };
    }
  });


  
