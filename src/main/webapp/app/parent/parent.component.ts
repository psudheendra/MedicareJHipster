import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-parent',
    templateUrl: './parent.component.html',
    styles: []
})
export class ParentComponent implements OnInit {
    parentMessage = 'message from parent';
    constructor() {}

    ngOnInit() {}
}
