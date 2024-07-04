function limpiarCampo(elemento,valor){
  document.getElementById(elemento).value=valor;
  
}
function encriptador(){
    let texto = document.getElementById('txt').value;
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a') {
          textoEncriptado += 'ai';
        }else if(texto[i] === 'e') {
          textoEncriptado += 'enter';
        }else if(texto[i] === 'i') {
            textoEncriptado += 'imes';
        }else if(texto[i] === 'o') {
            textoEncriptado += 'ober';
        }else if(texto[i] === 'u') {
            textoEncriptado += 'ufat';
        }else{
            textoEncriptado += texto[i];
        }
    }
    limpiarCampo("txt","")
    document.querySelector(".contenedor_resultado_texto").style.display = "none";
    document.querySelector(".resultado_texto2").style.display = "";
    return textoEncriptado;
}

function desencriptador(){
    let textoEncriptado = document.getElementById('txt').value;
    let textoDesencriptado = '';
    let i = 0;
    while (i < textoEncriptado.length) {
      if (textoEncriptado[i] === 'a' && textoEncriptado[i+1] === 'i') {
        textoDesencriptado += 'a';
        i += 2;
      } else if (textoEncriptado[i] === 'e' && textoEncriptado.substring(i, i+5) === 'enter') {
        textoDesencriptado += 'e';
        i += 5;
      } else if (textoEncriptado[i] === 'i' && textoEncriptado.substring(i, i+4) === 'imes') {
        textoDesencriptado += 'i';
        i += 4;
      } else if (textoEncriptado[i] === 'o' && textoEncriptado.substring(i, i+4) === 'ober') {
        textoDesencriptado += 'o';
        i += 4;
      } else if (textoEncriptado[i] === 'u' && textoEncriptado.substring(i, i+4) === 'ufat') {
        textoDesencriptado += 'u';
        i += 4;
      } else {
        textoDesencriptado += textoEncriptado[i];
        i++;
      }
    }
    limpiarCampo("txt","")
    document.querySelector(".contenedor_resultado_texto").style.display = "none";
    document.querySelector(".resultado_texto2").style.display = "";
    return textoDesencriptado;
}

function mostrarEncriptado(){
  document.querySelector("#resultado_texto").value = encriptador();
}
function mostrarDesencriptado(){
  document.querySelector("#resultado_texto").value = desencriptador();
}
function botonCopiar(){
  document.querySelector("#resultado_texto").select();
  document.execCommand("copy");
}
