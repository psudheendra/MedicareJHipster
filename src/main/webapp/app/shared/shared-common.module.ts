import { NgModule } from '@angular/core';

import { MedicareSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MedicareSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MedicareSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MedicareSharedCommonModule {}
