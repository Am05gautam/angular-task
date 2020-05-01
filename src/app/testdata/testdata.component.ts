import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testdata',
  templateUrl: './testdata.component.html',
  styleUrls: ['./testdata.component.scss']
})
export class TestdataComponent implements OnInit {
  studentToEnroll:{name:string,age:string,description:string}={name:"",age:"",description:""}
  students:{name:string,age:string,description:string}[]=[];
  numbers:number[];
  constructor() { }

  ngOnInit(): void {
  }
  addStudent(){
    let tempvar1= this.isNameValid();
    let tempvar2= this.isAgeValid();
    if(tempvar1 && tempvar2){
      let tempStudent={name:"",age:"",description:""};
      tempStudent.name=this.studentToEnroll.name;
      tempStudent.age=this.studentToEnroll.age;
      tempStudent.description=this.studentToEnroll.description;
      this.students.push(tempStudent)
      this.studentToEnroll.name="";
      this.studentToEnroll.age="";
      this.studentToEnroll.description="";
    }
  }

  isNameValid(){
    if(this.studentToEnroll.name!=""){
      return true;
    }
    else{
      alert("Invalid name!")
      return false;
    }
  }

  isAgeValid(){
    if(this.studentToEnroll.age!=""){
      return true;
    }
    else{
      alert("Invalid age!")
      return false;
    }
  }

  // deleteStudent(studenttobedeleted){
  //   let index=this.students.indexOf(studenttobedeleted);
  //   this.students.splice(index,1)
  // }

  deleteStudent(student){
    console.log("inite");
    let index=this.students.indexOf(student);
    this.students.splice(index,1)
  }

}
