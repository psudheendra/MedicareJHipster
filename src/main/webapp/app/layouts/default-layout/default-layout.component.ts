import { Component, OnInit } from '@angular/core';
import { navItems } from './_nav';

@Component({
    selector: 'jhi-default-layout',
    templateUrl: './default-layout.component.html',
    styles: []
})
export class DefaultLayoutComponent {
    public navItems = navItems;
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement = document.body;
    constructor() {
        this.changes = new MutationObserver(mutations => {
            this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
        });

        this.changes.observe(<Element>this.element, {
            attributes: true
        });
    }
}
