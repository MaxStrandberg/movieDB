import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Feedback from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private dbPath = '/feedbacks';

  feedbacksRef: AngularFireList<Feedback> = null;

  constructor(private db: AngularFireDatabase) {
    this.feedbacksRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Feedback> {
    return this.feedbacksRef;
  }

  create(feedback: Feedback): any {
    return this.feedbacksRef.push(feedback);
  }

  update(key: string, value: any): Promise<void> {
    return this.feedbacksRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.feedbacksRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.feedbacksRef.remove();
  }
}