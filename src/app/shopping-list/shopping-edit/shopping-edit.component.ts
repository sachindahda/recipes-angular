import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') name: ElementRef;
    @ViewChild('amountInput') amount: ElementRef;
    // @Output() newIngredient = new EventEmitter<Ingredient>();
    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
    }
    onAddIngredient() {
        // this.newIngredient.emit(
        //     { name: this.name.nativeElement.value, amount: this.amount.nativeElement.value });
        const ingName = this.name.nativeElement.value;
        const ingAmount = this.amount.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount)
        this.shoppingListService.addIngredient(newIngredient);
    }

}
