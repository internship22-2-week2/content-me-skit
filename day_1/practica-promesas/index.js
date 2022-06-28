const https = require('https');

class RequestMaker {
  static get flagsPath() {
    return 'https://flagcdn.com/es/codes.json';
  }

  static get postsPath() {
    return 'https://jsonplaceholder.typicode.com/posts/';
  }

  createPromise(path, parameter = '') {
    let url = path + parameter;
    return new Promise((resolve, reject) => {
      https.get(url, (resp) => {
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

  async makeAsyncRequest() {
    const flagsResult = await this.createPromise(RequestMaker.flagsPath);
    const postsResult = await this.createPromise(RequestMaker.postsPath);
    const onePostResult = await this.createPromise(RequestMaker.postsPath, 2);
    console.table(flagsResult);
    console.table(postsResult);
    console.table(onePostResult);
  }

  makeRequestWithAll() {
    const flagsResult = this.createPromise(RequestMaker.flagsPath);
    const postsResult = this.createPromise(RequestMaker.postsPath);
    const onePostResult = this.createPromise(RequestMaker.postsPath, 2);

    let promises = [flagsResult, postsResult, onePostResult];
    Promise.all(promises).then(valores => {
      console.log(valores)
    }, error => {
      console.log(error);
    });    
  }

  makeRequestWithRace() {
    const flagsResult = this.createPromise(RequestMaker.flagsPath);
    const postsResult = this.createPromise(RequestMaker.postsPath);
    const onePostResult = this.createPromise(RequestMaker.postsPath, 2);

    let promises = [flagsResult, postsResult, onePostResult];
    Promise.race(promises).then(valores => {
      console.log(valores)
    }, error => {
      console.log(error);
    });    
  }  
}

const requester = new RequestMaker();
//requester.makeAsyncRequest();
//requester.makeRequestWithAll();
requester.makeRequestWithRace();