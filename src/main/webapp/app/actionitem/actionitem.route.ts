import { Route } from '@angular/router';

import { ActionitemComponent } from './actionitem.component';

export const AI_ROUTE: Route = {
    path: 'actionitem',
    component: ActionitemComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    }
};
