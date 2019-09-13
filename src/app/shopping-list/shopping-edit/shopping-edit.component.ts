import { Component, OnInit, OnDestroy, ViewChild, } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    editMode = false;
    editedIndex: number;
    editedItem:Ingredient;
    @ViewChild('f') slForm:NgForm; 
    // @Output() newIngredient = new EventEmitter<Ingredient>();
    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing.subscribe(
            (index: number) => {
                this.editMode = true;
                this.editedIndex = index;
                this.editedItem=this.shoppingListService.getIngredient(index);
                this.slForm.setValue({
                    name:this.editedItem.name,
                    amount:this.editedItem.amount,
                })
            }
        )
    }
    onAddItem(form: NgForm) {
        console.log(form);
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount)
        this.shoppingListService.addIngredient(newIngredient);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
