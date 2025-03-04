import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions = [
    { id: 1, question: "Question 1?", answer: "Answer 1." },
    { id: 2, question: "Question 2?", answer: "Answer 2." }
  ];

  getQuestions(): Observable<any[]> {
    return of(this.questions);
  }

  getQuestionById(id: number): Observable<any> {
    return of(this.questions.find(q => q.id === id));
  }
}