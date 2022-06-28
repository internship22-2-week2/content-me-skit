class DispositivoEntrada {

  constructor(dispositivo){
    this.tipoEntrada = dispositivo.tipoEntrada;
    this.marca = dispositivo.marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set tipoEntrada(value) {
    this._tipoEntrada = value;
  }

  set marca(value) {
    this._marca = value;
  }
}

export class Raton extends DispositivoEntrada {
  static _contadorRatones = 1;

  constructor(raton){
      super(raton);
      this.idRaton = Raton.nextId;
  }

  static get nextId() {
    return Raton._contadorRatones++;
  }

  static get count() {
    return Raton._contadorRatones - 1;
  }  

  get idRaton() {
    return this._idRaton;
  }

  set idRaton(val) {
    this._idRaton = val;
  }

  toString(){
      console.log(`Hola! Soy un raton con Id: ${this.idRaton}, entrada: ${this.tipoEntrada}, marca: ${this.marca}`);
  }
}

export class Teclado extends DispositivoEntrada {
  static _contadorTeclados = 1;

  constructor(teclado){
    super(teclado);
    this.idTeclado = Teclado.nextId;
  }

  static get nextId() {
    return Teclado._contadorTeclados++;
  }

  static get count() {
    return Teclado._contadorTeclados - 1;
  }  

  get idTeclado() {
    return this._idTeclado;
  }

  set idTeclado(val) {
    this._idTeclado = val;
  }
  
  toString(){
    console.log(`Hola! Soy un teclado con Id: ${this.idTeclado}, entrada: ${this.tipoEntrada}, marca: ${this.marca}`);
  }
}

