import { createReducer, on } from "@ngrx/store";
import { initialState } from './applicant.state';
import { changeApplicantMsg1, changeApplicantMsg2, defaultMsg1, cancelMsg1, cancelMsg2 } from './applicant.actions';

const _applicantReducer = createReducer(initialState,
    on(defaultMsg1, (state) => {
        return {
            ...state
        }
    }),
    on(changeApplicantMsg1, (state) => {
        return {
            ...state,
            applicantMsg1: "Page one view-if 'professional' has been 'bought'"
        }
    }),
    on(changeApplicantMsg2, (state) => {
        return {
            ...state,
            applicantMsg2: "Page two view-if 'professional' has been 'bought'"
        }
    }),
    on(cancelMsg1, (state) => {
        return {
            ...state,
            applicantMsg1: 'Initial view - page one'

        }
    }),
    on(cancelMsg2, (state) => {
        return {
            ...state,

            applicantMsg2: 'Initial view - page two'

        }
    })

)

export function applicantReducer(state, action) {
    return _applicantReducer(state, action);
}
