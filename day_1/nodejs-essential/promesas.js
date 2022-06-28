let promesa = new Promise((resolve, reject) => {
  let estado = true;
  if (estado) {
    resolve('Todo bien');
  } else {
    reject(new Error('Algo salio mal'));
  }
});

promesa.then(reultado => {
  console.log(reultado);
}).catch(error => {
  console.log(error);
});

promesa = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve('Todo bien de nuevo');
  }, 2000);
});

promesa.then(reultado => {
  console.log(reultado);
}).catch(error => {
  console.log(error);
});

promesa = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 5);
});

promesa.then(valor1 => {
  console.log(valor1)
  return valor1 * 2;
}).then(valor2 => {
  console.log(valor2);
  return valor2 * 2
}).then(valor3 => {
  console.log(valor3);
  return valor3 * 2
});

const promesa1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Primer promeas')
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Segunda promeas')
});

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'Tercer promeas')
});

let promesas = [promesa1, promesa2, promesa3]
Promise.all(promesas).then(valores => {
  console.log(valores)
}, error => {
  console.log(error);
});

Promise.race(promesas).then(valor => {
  console.log(valor)
}, error => {
  console.log(error);
})

function primerProceso() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Primer proceso')
  })
}

function segundoProceso() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Segundo proceso')
  })
}

function tercerProceso() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'tercer proceso')
  })
}

async function llamarProcesos() {
  let resultado1 = await primerProceso()
  let resultado2 = await segundoProceso()
  let resultado3 = await tercerProceso()
  console.log(resultado1)
  console.log(resultado2)
  console.log(resultado3)
}

llamarProcesos();

const https = require('https');

function requestJsonPlaceholder() {
  return new Promise((resolve, reject) => {
    https.get('https://jsonplaceholder.typicode.com/users', (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        resolve(JSON.parse(data));
      })
    }).on('error', (error) => {
      reject(error);
    })
  });
}

function hacerPeticion() {
  let result = await requestJsonPlaceholder();
  console.table(result);
  console.error();
}

hacerPeticion();

