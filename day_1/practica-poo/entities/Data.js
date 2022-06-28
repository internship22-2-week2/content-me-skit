import fs from 'fs';

export class Data {
  constructor() {
    this._path = './data.json'
  }

  readJsonFile() {
    let contentFile = fs.readFileSync(this._path, 'utf8')
    if (contentFile) {
      return JSON.parse(contentFile);
    }

    return [];
  }

  writeJsonFile(data) {
    let jsonData = JSON.stringify(data, null, '');
    fs.writeFileSync(this._path, jsonData);
  }

  save(computadora) {
    let data = this.readJsonFile();
    data.push(computadora);
    this.writeJsonFile(data);
  }

  getAll() {
    return this.readJsonFile();
  }

  destroy(id) {
    let data = this.readJsonFile();
    let newData = data.filter(computadora => computadora._id !== id);
    this.writeJsonFile(newData);
  }
 }