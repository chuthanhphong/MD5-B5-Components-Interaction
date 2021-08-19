import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges, OnDestroy {
  message: string;
  remainingTime: number;
  @Input()
  seconds = 11;
  @Output()
  finish = new EventEmitter<boolean>();
  private intervaiId = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('second' in changes) {
      let v = changes.second.currentValue;
      v = typeof v === 'undefined' ? 11 : v;
      const vFixed = Number(v);
      this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;
    }
  }

  ngOnDestroy(): void {
    this.clearTime();
  }
clearTime() {
    clearInterval(this.intervaiId);
}




}
