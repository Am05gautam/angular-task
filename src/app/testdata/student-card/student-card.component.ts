import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  @Input("data") student
  @Output("deleteStudent") deleteEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteStudent(student){
    console.log("test")
    this.deleteEvent.emit(student)
  }
}
