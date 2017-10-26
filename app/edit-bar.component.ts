import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bar } from './bar.model';

@Component({
  selector: 'edit-bar',
  template: `
  <div>
      <div *ngIf="childSelectedBar">
        <h3>{{childSelectedBar.name}}</h3>
        <p>Beer In Stock? {{childSelectedBar.done}}</p>
        <hr>
        <h3>Edit Keg Info</h3>
        <label>Edit Beer Name:</label>
        <input [(ngModel)]="childSelectedBar.name">

        <label>Edit Brand Name:</label>
        <input [(ngModel)]="childSelectedBar.brand">

        <label>Edit Price:</label>
        <input [(ngModel)]="childSelectedBar.price">

        <label>Edit Content:</label>
        <input [(ngModel)]="childSelectedBar.content">

        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
`
})

export class EditBarComponent {
  @Input() childSelectedBar: Bar;
  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
