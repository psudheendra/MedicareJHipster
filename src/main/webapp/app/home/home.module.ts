import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MedicareSharedModule } from 'app/shared';
import { HomeComponent } from './home.component';
import { HOME_ROUTE } from './home.route';
import { AI_ROUTE } from '../actionitem/actionitem.route';
import { PARENT_ROUTE } from '../parent/parent.route';
import { FormShowHide_ROUTE } from '../form-task-hide-show/form-task-hide-show.route';
import { EMPTY_ROUTE } from '../layouts/empty/empty.route';
// import { DEFAULT_ROUTE } from '../layouts/default-layout/default-layout.route';
import { DASHBOARD_ROUTE } from '../layouts/dashboard/dashboard.route';

@NgModule({
    imports: [
        MedicareSharedModule,
        RouterModule.forChild([EMPTY_ROUTE, DASHBOARD_ROUTE, HOME_ROUTE, AI_ROUTE, PARENT_ROUTE, FormShowHide_ROUTE])
    ],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicareHomeModule {}
