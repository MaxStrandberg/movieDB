import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  ngOnInit(): void {
  }

}
