import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bar } from './bar.model';

@Component({
  selector: 'bar-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs">All Kegs</option>
    <option value="outOfStockKegs">Out of Stock Kegs</option>
    <option value="inStockKegs" selected="selected">In stock Kegs</option>
  </select>
    <ul>
      <li [class]= "priceColor(currentBar)" *ngFor="let currentBar of childBarList | completeness:filterByCompleteness">{{currentBar.name}} {{currentBar.brand}} {{currentBar.price}} <span [class]="contentBold(currentBar)">{{currentBar.content}}</span> {{currentBar.volume}}
        <input *ngIf="currentBar.done === true" type="checkbox" checked (click)="toggleDone(currentBar, false)"/>
        <input *ngIf="currentBar.done === false" type="checkbox" (click)="toggleDone(currentBar, true)"/>
        <button (click)="editButtonHasBeenClicked(currentBar)">Edit</button>
        <button (click) = "soldPintHasBeenClicked(currentBar)" (click) = "inform(currentBar)" class="btn btn-blue">Sold a pint</button>
      </li>
    </ul>
  `
})

export class BarListComponent {
  @Input() childBarList: Bar[];
  @Output() clickSender = new EventEmitter();
  filterByCompleteness: string = "inStockKegs";

  editButtonHasBeenClicked(barToEdit: Bar) {
    this.clickSender.emit(barToEdit);
  }

  soldPintHasBeenClicked(currentBar: Bar) {
    if (currentBar.volume > 1) {
    currentBar.volume -= 1;
    }
  }

  priceColor(currentBar){
    if (currentBar.price < 5){
      return "bg-info";
    } else {
      return "bg-danger";
    }
  }

  inform(currentBar) {
        if (currentBar.volume <= 10) {
        alert("Getting low, less than 10 pints left!");
      }
    }

  contentBold(currentBar) {
    if (currentBar.content > 6) {
      return "bold";
    }
  }


  onChange(optionFromMenu) {
  this.filterByCompleteness = optionFromMenu;
  }

  toggleDone(clickedBar: Bar, setCompleteness: boolean) {
     clickedBar.done = setCompleteness;
  }
}
