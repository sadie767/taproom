import { Component, Output, EventEmitter } from '@angular/core';
import { Bar } from './bar.model';

@Component({
  selector: 'new-bar',
  template: `
  <h1>New Keg</h1>
   <div>
     <label>Enter Beer Name:</label>
     <input #newName>
   </div>
   <div>
     <label>Enter Beer Brand:</label>
     <input #newBrand>
   </div>
   <div>
     <label>Enter Beer Price:</label>
     <input #newPrice>
   </div>
   <div>
     <label>Enter Beer Content:</label>
     <input #newContent>
   </div>
    <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newContent.value, newVolume.value)">Add</button>
  `
})

export class NewBarComponent {
  @Output() newBarSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, content: number) {
    var newBarToAdd: Bar = new Bar(name, brand, price, content);
    this.newBarSender.emit(newBarToAdd);
  }
}
