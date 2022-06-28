class Person{
  constructor(person){
      this._name = person.name;
      this._age = person.age;
      this._address = person.address;
  }
}

export class Student extends Person{
  constructor(student){
      super(student);
      this._grade = student.grade;
  }

  greet(){
      console.log(`Hello, I'm ${this._name} and I'm a student.`);
  }
}

export class Teacher extends Person{
  constructor(teacher){
      super(teacher)
      this._course = teacher.course;
  }
  
  greet(){
      console.log(`Hello, I'm ${this._name} and I'm a teacher.`);
  }
}