import { Route } from '@angular/router';

import { FormTaskHideShowComponent } from './form-task-hide-show.component';

export const FormShowHide_ROUTE: Route = {
    path: 'formshowhide',
    component: FormTaskHideShowComponent,
    data: {
        authorities: [],
        pageTitle: 'Form Show Hide Elements!'
    }
};
