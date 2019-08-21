import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') name: ElementRef;
    @ViewChild('amountInput') amount: ElementRef;
    @Output() newIngredient = new EventEmitter<Ingredient>();;
    constructor() { }

    ngOnInit() {
    }
    onAddIngredient() {
        // this.newIngredient.emit(
        //     { name: this.name.nativeElement.value, amount: this.amount.nativeElement.value });
        const ingName = this.name.nativeElement.value;
        const ingAmount = this.amount.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount)
        this.newIngredient.emit(newIngredient );
    }

}
