import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicantState } from '../state/applicant.state';
import { getMessage2 } from '../state/applicant.selector';
import { Observable } from 'rxjs';
import { changeApplicantMsg2, defaultMsg2 } from '../state/applicant.actions';

@Component({
  selector: 'app-message-page2',
  templateUrl: './message-page2.component.html',
  styleUrls: ['./message-page2.component.scss']
})
export class MessagePage2Component implements OnInit {

  applicantMsg2$: Observable<string>;
  public text: string = 'Buy';




  constructor(private store: Store<{ message: ApplicantState }>) { }





  ngOnInit(): void {

    this.applicantMsg2$ = this.store.select(getMessage2)

    console.log("Default Msg", this.applicantMsg2$)



  }

  onCancel() {
    if (this.text === 'Buy') {
      this.text = 'Cancel'
      this.store.dispatch(changeApplicantMsg2())


    } else if (this.text === 'Cancel') {
      this.text = 'Buy'
      this.store.dispatch(defaultMsg2())


    }

  }

}
