import { Component, OnInit } from '@angular/core';
import { ApplicantState } from '../state/applicant.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getMessage1 } from '../state/applicant.selector';
import { changeApplicantMsg1, defaultMsg1 } from '../state/applicant.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-page1',
  templateUrl: './message-page1.component.html',
  styleUrls: ['./message-page1.component.scss']
})
export class MessagePage1Component implements OnInit {

  applicantMsg1$: Observable<string>;
  defaultMsg1: string;
  public text: string = 'Buy';


  constructor(private router: Router, private store: Store<{ message: ApplicantState }>) { }

  ngOnInit(): void {

    this.applicantMsg1$ = this.store.select(getMessage1)


    console.log("Default Msg", this.defaultMsg1)
  }



  onCancel() {
    if (this.text === 'Buy') {
      this.text = 'Cancel'
      this.store.dispatch(changeApplicantMsg1())


    } else if (this.text === 'Cancel') {
      this.text = 'Buy'
      this.store.dispatch(defaultMsg1())


    }

  }




}

