import { Route } from '@angular/router';

import { ParentComponent } from './parent.component';

export const PARENT_ROUTE: Route = {
    path: 'parent',
    component: ParentComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    }
};
