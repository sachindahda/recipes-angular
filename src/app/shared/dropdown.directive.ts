import { Directive, HostListener, TemplateRef, ViewContainerRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen = false;
  
    @HostListener('click') toggleOpen(event: Event) {
        this.isOpen = !this.isOpen;
    }
}