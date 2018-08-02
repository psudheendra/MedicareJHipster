import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-form-task-hide-show',
    templateUrl: './form-task-hide-show.component.html',
    styles: []
})
export class FormTaskHideShowComponent implements OnInit {
    public summaries: any[];
    public displayColumns = [{ dbCol: 'id', dispCol: 'Id' }, { dbCol: 'name', dispCol: 'Name' }, { dbCol: 'age', dispCol: 'Age' }];
    show: boolean = false;
    public tableSource = {
        characters: [
            {
                id: '1',
                name: 'Peter Dinklage',
                age: '45'
            },
            {
                id: '2',
                name: 'Lina Heady',
                age: '43'
            },
            {
                id: '3',
                name: 'Emilia Clarke',
                age: '30'
            },
            {
                id: '4',
                name: 'Kit Harrington',
                age: '30'
            },
            {
                id: '5',
                name: 'Sean Bean',
                age: '50'
            }
        ]
    };

    constructor() {
        this.summaries = ['Freezing', 'Bracing', 'Chilly', 'Cool', 'Mild', 'Warm', 'Balmy', 'Hot', 'Sweltering', 'Scorching'];
    }

    ngOnInit() {}

    filterForeCasts(filterVal: any) {
        if (filterVal == 'Freezing') this.show = true;
        else this.show = false;
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

interface Summary {
    name: string;
}
