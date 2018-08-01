import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MedicareSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { AI_ROUTE } from '../actionitem/actionitem.route';
import { PARENT_ROUTE } from '../parent/parent.route';

@NgModule({
    imports: [MedicareSharedModule, RouterModule.forChild([HOME_ROUTE, AI_ROUTE, PARENT_ROUTE])],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicareHomeModule {}
