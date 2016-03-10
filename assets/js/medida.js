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
    
        

       

})(this);