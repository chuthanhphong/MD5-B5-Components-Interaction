import {Component, EventEmitter, Input, OnInit, Output, SimpleChange} from '@angular/core';
import {IRatingUnit} from '../irating-unit';



@Component({
  selector: 'app-rattting',
  templateUrl: './rattting.component.html',
  styleUrls: ['./rattting.component.css']
})
export class RatttingComponent implements OnInit {
  @Input()
  max = 10;
  @Input()
  RattingValue = 5;
  @Input()
  showRatting = true;
  @Output()
  rateChange = new EventEmitter<number>();

  rattingUnit: Array<IRatingUnit> = [];

  ngOnChanges(change: SimpleChange) {
    if ('max' in change) {
      let max = change.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.RattingValue);
    }

  }

  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }


  constructor() {

  }

  ngOnInit() {
    this.calculate(this.max, this.RattingValue);
  }
select(index){
    this.rateChange = index + 1;
    // @ts-ignore
  this.rattingUnit.forEach((item, idx) => item.active = idx < this.rateChange);
}

}


