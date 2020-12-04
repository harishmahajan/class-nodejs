
export class Student {

    constructor(rno, name) {
        this.rno = rno;
        this.name = name;
    }

    // Method
    studName() {
        return this.name;
    }
    studRno() {
        return this.rno;
    }
}