'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let valor = 0;
  let potencia= num.length-1;

  for(let i=0; i<num.length; i++){
    valor=valor + Number(num[i]) * Math.pow(2,potencia);
    potencia--;
  }
  return valor;
}

function DecimalABinario(num) {
  // tu codigo aca
  let result = [];
  let repite = true;
  let residuo;
  let cociente;

  while(repite){
    residuo = num % 2;
    cociente = (num-residuo)/2;

    result.push(residuo);
    num= cociente;

    if(num===1){
      result.push(num);
      repite = false;
    }
  }
  return result.reverse().join("");
}
    
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}