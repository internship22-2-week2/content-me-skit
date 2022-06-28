import { Raton, Teclado } from './entities/DispositivoEntrada.js';
import { Monitor } from './entities/Monitor.js'
import { Computadora } from './entities/Computadora.js'
import { Data } from './entities/Data.js'

class Orden {
  static _contadorOrdenes = 1;

  constructor() {
    this.idOrden = Orden.nextId;
    this._data = new Data();
    this._computadoras = [];
  }

  static get nextId() {
    return Orden._contadorOrdenes++;
  }

  get count() {
    return this._computadoras.length;
  }

  get idOrden() {
    return this._idOrden;
  }

  set idOrden(val) {
    this._idOrden = val;
  }
  
  agregarComputadora(computer){
    this._computadoras.push(computer);
    this._data.save(computer);
    this.greeting(computer);
  }

  greeting(instance){
    instance.toString();
  }

  showData(){
    let data = this._data.getAll();
    console.table(data);
    console.dir(data, {depth: null});
  }

  mostrarOrden() {
    console.log(`Orden No.: ${this.idOrden} -------------- ${this.count} items`)
    this._computadoras.forEach(item => item.toString());
  }

  toString() {
    console.log(`Orden No.: ${this.idOrden}, items: ${this.count}`)
  }
}

const raton1 = {
  tipoEntrada: 'USB',
  marca: 'XTech'
}

const teclado1 = {
  tipoEntrada: 'USB',
  marca: 'XTech'
}

const monitor1 = {
  marca: 'XTech',
  tamanio: 23
}

let nuevoRaton = new Raton(raton1);
let nuevoTeclado = new Teclado(teclado1);
let nuevoMonitor = new Monitor(monitor1);
let nuevaCompu1 = new Computadora("DELL", nuevoMonitor, nuevoRaton, nuevoTeclado);

nuevoRaton = new Raton(raton1);
nuevoTeclado = new Teclado(teclado1);
nuevoMonitor = new Monitor(monitor1);
let nuevaCompu2 = new Computadora("Asus", nuevoMonitor, nuevoRaton, nuevoTeclado);

nuevoRaton = new Raton(raton1);
nuevoTeclado = new Teclado(teclado1);
nuevoMonitor = new Monitor(monitor1);
let nuevaCompu3 = new Computadora("HP", nuevoMonitor, nuevoRaton, nuevoTeclado);

const nuevaOrden = new Orden();
nuevaOrden.agregarComputadora(nuevaCompu1);
nuevaOrden.agregarComputadora(nuevaCompu2);
nuevaOrden.agregarComputadora(nuevaCompu3);
nuevaOrden.mostrarOrden();
nuevaOrden.showData();