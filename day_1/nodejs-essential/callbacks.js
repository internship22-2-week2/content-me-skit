function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

function persona(nombre, callback) {
  callback(nombre);
}

persona('Juan', saludar)