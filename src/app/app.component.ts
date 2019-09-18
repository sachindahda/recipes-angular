import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'RecipeBook';
    loadedFeature = 'recipe';
    onNavigate(feature: string) {
        this.loadedFeature = feature;
    }
    ngOnInit() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDSRNNSDBBbov0JUs_4lqY8w2rBNMt1gvs'
        });
    }

}
