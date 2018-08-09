import { Route } from '@angular/router';

import { EmptyComponent } from './empty.component';

export const EMPTY_ROUTE: Route = {
    path: 'empty',
    component: EmptyComponent,
    data: {
        authorities: [],
        pageTitle: 'Welcome, Java Hipster!'
    }
};
