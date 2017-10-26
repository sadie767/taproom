import { Component } from '@angular/core';
import { Bar } from './bar.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Becca's Taproom Inventory</h1>
      <h1>List of kegs: </h1>
      <h4>(Name, Brand, Price, ABV, Volume)</h4>
      <bar-list [childBarList]="masterBarList" (clickSender)="editBar($event)"></bar-list>
      <p>*higher alcohol content in <strong>bold</strong></p>
      <hr>
      <edit-bar [childSelectedBar]="selectedBar" (doneButtonClickedSender)="finishedEditing()">></edit-bar>
      <new-bar (newBarSender)="addBar($event)"></new-bar>
    </div>

  `
})

export class AppComponent {
  selectedBar = null;

  masterBarList: Bar[] = [
    new Bar('Starburst IPA', 'Ecliptic', 7, 6.8),
    new Bar('Breakside IPA', 'Breakside', 6, 7.3),
  ];

  editBar(clickedBar) {
    this.selectedBar = clickedBar;
  }

  finishedEditing() {
    this.selectedBar = null;
  }

  addBar(newBarFromChild: Bar) {
    this.masterBarList.push(newBarFromChild);
  }

}
