import {Student} from './student';
const stud = new Student(1,"Yash");

class User {
    constructor(userName) {
      this.userName = userName;
      // this.width = width;
    }

    // Getter
    get name() {
      return this.userNames();
    }
    // Method
    userNames() {
      console.log(stud.studName())
      console.log(stud.studRno())
      return this.userName;
    }
  }
  
  const uName = new User("Harish Mahajan");
  console.log(uName.userNames());