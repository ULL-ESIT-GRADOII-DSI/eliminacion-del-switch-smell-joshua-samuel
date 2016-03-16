(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
      this.valor = valor;
      this.tipo = tipo || "";
  }

  function Temperatura(valor,tipo)
  {
    Medida.call(this, valor, tipo);
  }

  Temperatura.prototype = new Medida ();
  Temperatura.prototype.constructor = Temperatura;

  function Celsius(valor)
  {
    Temperatura.call(this, valor);
  }

  Celsius.prototype = new Temperatura();
  Celsius.prototype.constructor = Celsius;

  Celsius.prototype.toFahrenheit = function () {
    var result = (this.valor * 9/5)+32;
    return result;
  };

  Celsius.prototype.toKelvin = function () {
    var result = this.valor + 273.15;
    return result;
  };

  function Kelvin(valor)
  {
    Temperatura.call(this, valor);
  }

  Kelvin.prototype = new Temperatura();
  Kelvin.prototype.constructor = Kelvin;

  Kelvin.prototype.toCelsius = function () {
    var result = this.valor - 273.15;
    return result;
  };

  Kelvin.prototype.toFahrenheit = function () {
    var result = ((this.valor - 273.15) * 9/5) + 32;
    return result;
  };

  function Fahrenheit(valor)
  {
    Temperatura.call(this, valor);
  }

  Fahrenheit.prototype = new Temperatura();
  Fahrenheit.prototype.constructor = Fahrenheit;

  Fahrenheit.prototype.toCelsius = function () {
    var result = (this.valor - 32) * 5/9;
    return result;
  };

  Fahrenheit.prototype.toKelvin = function () {
    var result = ((this.valor - 32) / (9/5)) + 273.15;
    return result;
  };

  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Fahrenheit = Fahrenheit;
  exports.Kelvin = Kelvin;

  exports.convertir = function() {
    var valor     = document.getElementById('convert').value,
        elemento  = document.getElementById('converted'),
        regexp = XRegExp('^(\\s*) \n' +
                          '(?<val> [-+]?[0-9]+(\\.[0-9]+)?(?:e[+-]?[0-9]+)?) # val \n' +
                          '(\\s*) \n' +
                          '(?<tip> [fckFCK]) # tip \n' +
                          '(\\s*) \n' +
                          '(?<to> (to))? # to \n' +
                          '(\\s*) \n' +
                          '(?<para> [fckFCK]) # para \n' +
                          '(\\s*)$','x');
          valor = XRegExp.exec(valor, regexp);

    if (valor) {
      var numero = valor.val,
          tipo   = valor.tip.toLowerCase(),
          destino = valor.para.toLowerCase();
      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo + ", To: " + destino);

      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          if(destino == 'c')
            elemento.innerHTML = numero.toFixed(2) + " Celsius";
          if(destino == 'f')
            elemento.innerHTML = celsius.toFahrenheit().toFixed(2) + " Fahrenheit";
          if(destino == 'k')
            elemento.innerHTML = celsius.toKelvin().toFixed(2) + " Kelvin";
          break;
        case 'f':
          var fahrenheit = new Fahrenheit(numero);
          if(destino == 'f')
            elemento.innerHTML = numero.toFixed(2) + " Fahrenheit";
          if(destino == 'c')
            elemento.innerHTML = fahrenheit.toCelsius().toFixed(2) + " Celsius";
          if(destino == 'k')
            elemento.innerHTML = fahrenheit.toKelvin().toFixed(2) + " Kelvin";
          break;
        case 'k':
          var kelvin = new Kelvin(numero);
          if(destino == 'k')
            elemento.innerHTML = numero.toFixed(2) + " Kelvin";
          if(destino == 'c')
            elemento.innerHTML = kelvin.toCelsius().toFixed(2) + " Celsius";
          if(destino == 'f')
            elemento.innerHTML = kelvin.toFahrenheit().toFixed(2) + " Fahrenheit";
          break;
        default:
          elemento.innetHTML = ".";
      }

    }
    else
      elemento.innerHTML = "Introduzca una temperatura valida: 330e-1 F to C";
  }
})(this);