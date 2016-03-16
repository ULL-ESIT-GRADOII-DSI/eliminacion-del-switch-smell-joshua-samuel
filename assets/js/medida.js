var regexp = XRegExp('^([ ]*) \n' +
                    '(?<val> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) # val \n' +
                    '([ ]*) \n' +
                    '(?<tip> [a-zA-Z]) # tip \n' +
                    '([ ]*) \n' +
                    '(?<to> (to))? # to \n' +
                    '([ ]*) \n' +
                    '(?<para> [a-zA-Z]+) # para \n' +
                    '([ ]*)$','x');
 


function Medida (valor,tipo)
{
    //var regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:e[-+]?\d+)?)\s*([a-zA-Z]+)\s*$/i;
    var val = XRegExp.exec(valor, regexp);
    if (val) {
      this.valor = val[1];
      this.tipo = val[2];
    } else {
      this.valor = valor;
      this.tipo = tipo;
    }
}
/*
Medida.match = function (valor) {
  var regexp = XRegExp('^([ ]*) \n' +
                    '(?<val> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) # val \n' +
                    '([ ]*) \n' +
                    '(?<tip> [a-zA-Z]) # tip \n' +
                    '([ ]*) \n' +
                    '(?<to> (to))? # to \n' +
                    '([ ]*) \n' +
                    '(?<para> [a-zA-Z]+) # para \n' +
                    '([ ]*)$','x');
  valor = XRegExp.exec(valor, regexp);
  return valor;
}*/

Medida.measures = {};

Medida.convertir = function(valor) {

  var match = XRegExp.exec(valor, regexp);
  //var match = rgx(valor);
  if (match) {
    var numero = match.val,
        tipo   = match.tip.toLowerCase(),
        destino = match.para.toLowerCase();

    try {
      var source = new measures[tipo](numero);                  
      var target = "to"+measures[destino].name;                
      return source[target]().toFixed(2) + " "+measures[destino].name;        
    }
    catch(err) {
      console.log(err);
      return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
    }
  }
  else
    return "Introduzca una temperatura valida: 330e-1 F to C";
};
