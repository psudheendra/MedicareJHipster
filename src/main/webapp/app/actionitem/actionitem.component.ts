import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
    imports: [NgxEditorModule, AngularEditorModule, TooltipModule.forRoot()]
})
@Component({
    selector: 'jhi-actionitem',
    templateUrl: './actionitem.component.html',
    styles: [
        `.backdrop{
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}`
    ]
})
export class ActionitemComponent implements OnInit {
    display = 'none';
    htmlContent = '';

    config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '10rem',
        minHeight: '5rem',
        placeholder: 'Enter text here...',
        translate: 'no',
        customClasses: [
            {
                name: 'quote',
                class: 'quote'
            },
            {
                name: 'redText',
                class: 'redText'
            },
            {
                name: 'titleText',
                class: 'titleText',
                tag: 'h1'
            }
        ]
    };

    constructor() {}

    ngOnInit() {}

    openModal() {
        this.display = 'block';
    }

    onCloseHandled() {
        this.display = 'none';
    }
}
