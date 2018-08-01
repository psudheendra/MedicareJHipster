import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'jhi-child',
    templateUrl: './child.component.html',
    styles: []
})
export class ChildComponent implements OnInit {
    @Input() childMessage: string;

    constructor() {}

    ngOnInit() {}
}
