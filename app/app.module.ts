import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { BarListComponent }  from './bar-list.component';
import { EditBarComponent }  from './edit-bar.component';
import { NewBarComponent } from './new-bar.component';
import { CompletenessPipe } from './completeness.pipe';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  BarListComponent,
                  EditBarComponent,
                  NewBarComponent,
                  CompletenessPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
