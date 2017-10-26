import {Pipe, PipeTransform} from '@angular/core';
import {Bar} from './bar.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {


  transform(input: Bar[], desiredCompleteness) {
    var output: Bar[] = [];
    if(desiredCompleteness === "inStockKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "outOfStockKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
