function Medida (valor,tipo)
{
    var regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:e[-+]?\d+)?)\s*([a-zA-Z])\s*$/i;
    var val = regexp.exec(valor);
    if (val) {
      this.valor = val[1];
      this.tipo = val[2];
    } else {
      this.valor = valor;
      this.tipo = tipo;
    }
}

Medida.match = function (valor) {
  var regexp = XRegExp('^([ ]*) \n' +
                    '(?<val> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) # val \n' +
                    '([ ]*) \n' +
                    '(?<tip> [a-zA-Z]) # tip \n' +
                    '([ ]*) \n' +
                    '(?<to> (to))? # to \n' +
                    '([ ]*) \n' +
                    '(?<para> [a-zA-Z]) # para \n' +
                    '([ ]*)$','x');
  valor = XRegExp.exec(valor, regexp);
  return valor;
}

Medida.measures = {};

Medida.convertir = function(valor) {
  var measures = Medida.measures;

  measures.c  = Celsius;
  measures.f = Fahrenheit;
  measures.k = Kelvin;

  var match = Medida.match(valor);
  if (match) {
    var numero = match.val,
        tipo   = match.tip.toLowerCase(),
        destino = match.para.toLowerCase();

    try {
      var source = new measures[tipo](numero);                  // new Fahrenheit(32)
      var target = "to"+measures[destino].name;                 // "toCelsius"
      return source[target]().toFixed(2) + " "+measures[destino].name;          // "0 Celsius"
    }
    catch(err) {
      console.log(err);
      return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
    }
  }
  else
    return "Introduzca una temperatura valida: 330e-1 F to C";
};
