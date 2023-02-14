import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../applicants';
import * as applicantsData from '../../applicants'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicantState } from '../state/applicant.state';
import { getMessage1 } from '../state/applicant.selector';
import { changeApplicantMsg1, changeApplicantMsg2, defaultMsg1, defaultMsg2 } from '../state/applicant.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.scss']
})
export class ApplicationPageComponent implements OnInit {
  applicantsData = applicantsData;
  selectedMsgId: string | undefined;
  applicantMsg$: Observable<string>;
  buttonDisabled: boolean;


  constructor(private router: Router, private store: Store<{ message: ApplicantState }>) { }

  ngOnInit(): void {

    this.applicantMsg$ = this.store.select(getMessage1)
    this.buttonDisabled = false;
  }

  onChangeDefaultMessage1() {
    this.store.dispatch(defaultMsg1())
    this.router.navigate(['/message1'])

  }

  onChangeDefaultMessage2() {
    this.store.dispatch(defaultMsg2())
    this.router.navigate(['/message2'])
  }

  onChangeMessage1() {
    this.store.dispatch(changeApplicantMsg1())
    this.router.navigate(['/message1'])


  }
  onChangeMessage2() {
    this.store.dispatch(changeApplicantMsg2())
    this.router.navigate(['/message2'])

  }
}
