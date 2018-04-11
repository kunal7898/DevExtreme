import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
@Component({
  selector: "app-example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.css"]
})
export class ExampleComponent implements OnInit {
  Courses = [
    {
      Id: 1,
      Name: "Test"
    },
    {
      Id: 2,
      Name: "Example"
    }
  ];
  constructor() {}

  ngOnInit() {}

  AddCourses() {
    this.Courses.push({ Id: 3, Name: "UI" });
  }

  trackByCourse(index, Course) {
    return Course ? index : undefined;
  }

  OnChange(value) {
    console.log(value);
  }
}
