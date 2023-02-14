import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ApplicantState } from './applicant.state';


const getApplicantState = createFeatureSelector<ApplicantState>('message');

export const getMessage1 = createSelector(getApplicantState, (state) => {
    return state.applicantMsg1;
})
export const getMessage2 = createSelector(getApplicantState, (state) => {
    return state.applicantMsg2;
})



