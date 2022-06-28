export class Monitor {
  static _contadorMonitores = 1;

  constructor(monitor){
    this.idMonitor = Monitor.nextId;
    this.marca = monitor.marca;
    this.tamanio = monitor.tamanio;
  }

  static get nextId() {
    return Monitor._contadorMonitores++;
  }

  static get count() {
    return Monitor._contadorMonitores - 1;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }

  get tamanio() {
    return this._tamanio;
  }
  
  set idMonitor(value) {
    this._idMonitor = value;
  }

  set marca(value) {
    this._marca = value;
  }

  set tamanio(value) {
    this._tamanio = value;
  }

  toString() {
    console.log(`Monitor, Id: ${this.idMonitor}, marca: ${this.marca}, tamaño: ${this.tamanio}`);
  }
}

// const raton = {
//   tamaño: '22"',
//   marca: 'XTech'
// }

// const monitor = new Monitor(raton);
// console.log(DispositivoEntrada.getId);
// console.log(DispositivoEntrada.getId);
// console.log(DispositivoEntrada.getId);
// console.log(DispositivoEntrada.getId);
