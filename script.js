function converter() {
  let numeroConvertido;
  let numeroBinario = document.querySelector('#bin').value;
  let validado = validarNumeroBinario(numeroBinario);
  if (validado == true) {
    numeroConvertido = converterParaDecimal(numeroBinario);
    document.getElementById("atencao").classList.add('disable');
    document.getElementById("atencao").classList.remove('active');
    document.getElementById("resultado").classList.add('active');
    document.getElementById("converter").classList.remove('active');
    document.getElementById("converter").classList.add('disable');
    document.getElementById("bin").disabled = true;
    document.getElementById("resultado").innerHTML = numeroBinario + ' em Binário equivale a ' + numeroConvertido + ' em Decimal';
    document.getElementById("recarregar").classList.add('active');
  }

  function converterParaDecimal(bin) {
    let expoente = bin.length - 1;
    let novoNumero = 0;

    for (let i = 0; i < bin.length; i++) {
      if (bin[i] == '1') {
        novoNumero += Math.pow(2, expoente);
      }
      expoente--;
    }
    return novoNumero;
  }

  function validarNumeroBinario(numero) {
    if (isBinario(numero) == false) {
      document.getElementById("atencao").classList.add('active');
      document.getElementById("atencao").innerHTML = 'POR FAVOR INSIRA UM NÚMERO BINÁRIO VÁLIDO QUE CONTENHA CARACTERES 0 OU 1';
      return false;
    } else if ((numero.length > 8) || numero.length == 0) {
      document.getElementById("atencao").classList.add('active');
      document.getElementById("atencao").innerHTML = 'POR FAVOR INSIRA UM NÚMERO BINÁRIO DE ATÉ 8 DÍGITOS';
      return false;
    } else {
      return true;
    }
  }

  function isBinario(numero) {
    let valido = true;
    for (let i = 0; i < numero.length; i++) {
      if (numero[i] != 0 && numero[i] != 1) {
        valido = false;
      }
    }
    return valido;
  }
}

function recarregar() {
  location.reload();
}