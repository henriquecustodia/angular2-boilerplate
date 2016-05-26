import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import { ComponentService } from './componentService';

@Component({
    selector: 'my-app',
    template: `<h1 *ngFor="let name of names">{{ name }}</h1>`,
    directives: [NgFor],
    providers: [ComponentService, HTTP_PROVIDERS]
})
export class AppComponent {
    public names: string[];

    constructor(service: ComponentService) {
        service.getNames().forEach((res) => {
            this.names = res.json();
        });
    }
}