import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Feedback from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/services/feedback.services';




@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback: Feedback = new Feedback();
  submitted = false;

  constructor(private feedBackService: FeedbackService) { }

  ngOnInit(): void {

  }

  saveFeedback(): void {
    this.feedBackService.create(this.feedback).then(() => {
      console.log('Feedback sent!');
      this.submitted = true;
    });
  }

  newFeedback(): void {
    this.submitted = false;
    this.feedback = new Feedback();
  }

}
