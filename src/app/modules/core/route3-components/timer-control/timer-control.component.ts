import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss'],
})
export class TimerControlComponent {
  showStart: boolean = true;
  @Output() toogleTimerEvent: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();
  @ViewChild('timeUnit') input: any;

  constructor() {}

  toogleTimer(value: string, isPaused: boolean) {
    this.showStart = isPaused;
    this.toogleTimerEvent.emit({ value, isPaused });
  }

  resetTimer(event: any) {
    event.value = '';
    this.showStart = true;
    this.reset.emit();
  }

  resetData() {
    this.showStart = true;
    this.input.nativeElement.value = '';
  }
}
