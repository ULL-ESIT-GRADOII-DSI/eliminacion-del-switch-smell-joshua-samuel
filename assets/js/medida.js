(function(exports) { 
   "use strict"; 
 
 
    function Medida(valor,tipo)
  {
      this.valor = valor;
      this.tipo = tipo || "";
  }
   
    Medida.prototype.REGEXP = XRegExp('^(\\s*) \n' +
                                     '(?<val> [-+]?[0-9]+(\\.[0-9]+)?(?:e[+-]?[0-9]+)?) # val \n' +
                                     '(\\s*) \n' +
                                     '(?<tip> [fckFCK]) # tip \n' +
                                     '(\\s*) \n' +
                                     '(?<to> (to))? # to \n' +
                                     '(\\s*) \n' +
                                     '(?<para> [fckFCK]) # para \n' +
                                     '(\\s*)$','x');
    Medida.convertir = function(value) { 
    var valor = XRegExp.exec(value, Medida.prototype.REGEXP); 
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
            return numero.toFixed(2) + " Celsius";
          if(destino == 'f')
            return celsius.toFahrenheit().toFixed(2) + " Fahrenheit";
          if(destino == 'k')
            return celsius.toKelvin().toFixed(2) + " Kelvin";
          break;
        case 'f':
          var fahrenheit = new Fahrenheit(numero);
          if(destino == 'f')
            return numero.toFixed(2) + " Fahrenheit";
          if(destino == 'c')
            return fahrenheit.toCelsius().toFixed(2) + " Celsius";
          if(destino == 'k')
            return fahrenheit.toKelvin().toFixed(2) + " Kelvin";
          break;
        case 'k':
          var kelvin = new Kelvin(numero);
          if(destino == 'k')
            return numero.toFixed(2) + " Kelvin";
          if(destino == 'c')
            return kelvin.toCelsius().toFixed(2) + " Celsius";
          if(destino == 'f')
            return kelvin.toFahrenheit().toFixed(2) + " Fahrenheit";
          break;
        default:
          return "ERROR Introduzca una temperatura valida: 330e-1 F to C";
          
      }

    }
    else
      return "Introduzca una temperatura valida: 330e-1 F to C";
  
    };
        
})(this);