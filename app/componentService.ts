import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';

@Injectable()
export class ComponentService {
    constructor(private http: Http) { }
    
    getNames() {
        return this.http.get('mockData/data.json');
    }
}