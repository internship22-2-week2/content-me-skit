import {Student,Teacher} from './entities/Person.js';
import {Data} from './entities/Data.js'


class Register {
  constructor() {
    this._data = new Data();
  }
  
  register(person){
    let newPerson = null;
    if(person.grade){
      newPerson = new Student(person);
    }else{
      newPerson =  new Teacher(person);
    }
    this._data.save(newPerson);
    this.greeting(newPerson);
  }

  greeting(instance){
    instance.greet();
  }

  showData(){
    let data = this._data.getAll();
    console.table(data);
  }
}

let student1 = {
    name: 'John',
    age: 20,
    address: '123 Main St',
    grade: 'A'
}

let teacher1 = {
    name: 'Jane',
    age: 30,
    address: '456 Main St',
    course: 'Math'
}


const registerPerson = new Register();
registerPerson.register(teacher1);
registerPerson.showData();