export class Computadora {
  static _contadorComputadoras = 1;

  constructor(nombre, monitor, raton, teclado){
    this.idComputadora = Computadora.nextId;
    this.nombre = nombre;
    this.monitor = monitor;
    this.teclado = teclado;
    this.raton = raton;
  }

  static get nextId() {
    return Computadora._contadorComputadoras++;
  }

  static get count() {
    return Computadora._contadorComputadoras - 1;
  }

  get idComputadora() {
    return this._idComputadora;
  }

  get nombre() {
    return this._nombre;
  }

  get monitor() {
    return this._monitor;
  }

  get teclado() {
    return this._teclado;
  }

  get raton() {
    return this._raton;
  }

  set idComputadora(value) {
    this._idComputadora = value;
  }
  
  set nombre(value) {
    this._nombre = value;
  }

  set monitor(value) {
    this._monitor = value;
  }

  set teclado(value) {
    this._teclado = value;
  }

  set raton(value) {
    this._raton = value;
  }

  toString() {
    console.log(`Computadora, Id: ${this.idComputadora}, nombre: ${this.nombre}`);
    this.monitor.toString();
    this.teclado.toString();
    this.raton.toString();
  }  
}