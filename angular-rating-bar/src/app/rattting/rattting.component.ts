import {Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges , OnChanges} from '@angular/core';
import {IRatingUnit} from '../irating-unit';



@Component({
  selector: 'app-rattting',
  templateUrl: './rattting.component.html',
  styleUrls: ['./rattting.component.css']
})
export class RatttingComponent implements OnInit, OnChanges {
  @Input()
  max = 10;
  @Input()
  RattingValue = 5;
  @Input()
  showRatting = true;
  @Output()
  rateChange = new EventEmitter<number>();

  rattingUnit: Array<IRatingUnit> = [];
  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 5 : max;
      this.max = max;
      this.calculate(max, this.RattingValue);
    }
  }

  calculate(max, ratingValue) {
    this.rattingUnit = Array.from({length: max},
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

  select(index) {
    this.RattingValue= index + 1;

    this.rattingUnit.forEach((item, idx) => item.active = idx < this.RattingValue);
    this.rateChange.emit(this.RattingValue);

  }

  enter(index) {
    this.rattingUnit.forEach((item, idx) => item.active = idx <= index);
  }

  reset() {
    this.rattingUnit.forEach((item, idx) => item.active = idx < this.RattingValue);


  }
}


