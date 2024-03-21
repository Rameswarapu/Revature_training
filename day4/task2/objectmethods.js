var student={
    name:"sowmya",
    age:20,
    grade:'A',

    displayinfo:function(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.grade)
    }
};
student.displayinfo();

var newStudent = {
    name: prompt("Enter the new student's name:"),
    age: parseInt(prompt("Enter the new student's age:")),
    grade: prompt("Enter the new student's grade:")
};
student.newName = newStudent.name;
student.newAge = newStudent.age;
student.newGrade = newStudent.grade;
console.log(student);
