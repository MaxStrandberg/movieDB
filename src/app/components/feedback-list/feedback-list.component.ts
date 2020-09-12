import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.services';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  feedbacks: any;
  currentFeedback: null;
  currentIndex: -1;
  title = '';

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.retrieveFeedbacks();
  }

  refreshList(): void {
    this.currentFeedback = null;
    this.currentIndex = -1;
    this.retrieveFeedbacks();
  }

  retrieveFeedbacks() {
    this.feedbackService.getAll().snapshotChanges().pipe(
      map(changes => 
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(data => {
        this.feedbacks = data;
      });
  }

  setActiveFeedback(feedback, index): void {
    this.currentFeedback = feedback;
    this.currentIndex = index;
  }

}
