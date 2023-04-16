// Bloquear caracteres especiais e letras maiúsculas
//let texto = document.querySelector('#texto')
let texto = document.getElementById('#texto')

texto.addEventListener("keydown", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

function checkChar(e) {
  // nao aceitar caracteres especiais e letras maiúsculas e emite um alerta
  const charCode = e.keyCode;

  if (charCode >= 65 && charCode <= 90) {
    alert("Não é permitido letras maiúsculas!");
    return false;
  } else if (charCode >= 32 && charCode <= 47) {
    alert("Não é permitido caracteres especiais!");
    return false;
  } else {
    return true;
  }
}

function Init () {
  var textoA = document.getElementById('texto');
  textoA.addEventListener( 'keypress', checkName, false );
}

function checkName(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
      if (charCode < 97 || charCode > 122) {
          evt.preventDefault();
          alert(
              "Não é permitido letras maiúsculas nem caracteres especiais!"
              + "\n" + "charCode: " + charCode + "\n"
          );
      }
  }
}



function validaTexto() {
  //let txt = document.querySelector('#texto')
  let txt = document.getElementById('#texto')
  if (txt >= 65 && txt <= 90) {
    alert("Não é permitido letras maiúsculas!");
    return false;
  } else if (txt >= 32 && txt <= 47) {
    alert("Não é permitido caracteres especiais!");
    return false;
  } else {
    return true;
  }
}

//console.log(checkChar('a'));
//console.log(checkChar('A'));

function criptografar(texto) {
  // substituir as letras
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  texto = texto.replace(/mes/g, "");

  if (checkChar(texto)) {
    console.log(texto);
  } else {
    alert("Não é permitido caracteres especiais e letras maiúsculas!");
  }

  // retornar a versão criptografada

  return texto;
}

function descriptografar(texto) {
  // substituir as letras
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/enter/g, "e");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ufat/g, "u");
  texto = texto.replace(/mes/g, "");
  

  if (checkChar(texto)) {
    console.log(texto);
  } else {
    alert("Não é permitido caracteres especiais e letras maiúsculas!");
  }

  // retornar a versão descriptografada
  return texto;
}

function copiarTexto() {
  var texto = document.getElementById("resultado").innerHTML;
  copiarValorCampo(texto);
  alert("Texto copiado para a área de transferência!");
}

function copiarValorCampo(valorCampo) {
  var inputTemp = document.createElement("input");
  inputTemp.style = "position: absolute; left: -1000px; top: -1000px";
  inputTemp.value = valorCampo;
  document.body.appendChild(inputTemp);
  inputTemp.select();
  document.execCommand("copy");
  document.body.removeChild(inputTemp);
}
