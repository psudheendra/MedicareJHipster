import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { MedicareSharedModule } from 'app/shared';
import { MedicareCoreModule } from 'app/core';
import { MedicareAppRoutingModule } from './app-routing.module';
import { MedicareHomeModule } from './home/home.module';
import { MedicareAccountModule } from './account/account.module';
import { MedicareEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ErrorComponent } from './layouts';
import { ActionitemComponent } from './actionitem/actionitem.component';
import { BusinessOwnerComponent } from './business-owner/business-owner.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxEditorModule } from 'ngx-editor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormTaskHideShowComponent } from './form-task-hide-show/form-task-hide-show.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule } from '@coreui/angular';
// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EmptyComponent } from './layouts/empty/empty.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        BrowserModule,
        MedicareAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        MedicareSharedModule,
        MedicareCoreModule,
        MedicareHomeModule,
        MedicareAccountModule,
        MedicareEntityModule,
        AngularEditorModule,
        FontAwesomeModule,
        NgxEditorModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot()
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    exports: [AngularEditorModule],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        ActionitemComponent,
        BusinessOwnerComponent,
        ParentComponent,
        ChildComponent,
        FormTaskHideShowComponent,
        DashboardComponent,
        DefaultLayoutComponent,
        EmptyComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [DefaultLayoutComponent]
})
export class MedicareAppModule {}
