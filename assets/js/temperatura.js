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
}

Celsius.prototype.toKelvin = function () {
  var result = parseFloat(this.valor) + 273.15;
  return result;
}

function Kelvin(valor)
{
  Temperatura.call(this, valor);
}

Kelvin.prototype = new Temperatura();
Kelvin.prototype.constructor = Kelvin;

Kelvin.prototype.toCelsius = function () {
  var result = this.valor - 273.15;
  return result;
}

Kelvin.prototype.toFahrenheit = function () {
  var result = ((this.valor - 273.15) * 9/5) + 32;
  return result;
}

function Fahrenheit(valor)
{
  Temperatura.call(this, valor);
}

Fahrenheit.prototype = new Temperatura();
Fahrenheit.prototype.constructor = Fahrenheit;

Fahrenheit.prototype.toCelsius = function () {
  var result = (this.valor - 32) * 5/9;
  return result;
}

Fahrenheit.prototype.toKelvin = function () {
  var result = ((this.valor - 32) / (9/5)) + 273.15;
  return result;
}
