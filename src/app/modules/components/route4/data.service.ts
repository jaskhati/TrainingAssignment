import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private timeUnit = new Subject<any>();
  private resetTimer = new Subject<any>();
  private resetData = new Subject<any>();

  constructor() {}

  emitTimeUnit(value: string, isPaused: boolean) {
    this.timeUnit.next({ value, isPaused });
  }

  emitReset() {
    this.resetTimer.next('reset');
  }

  emitResetData() {
    this.resetData.next('');
  }

  getResetData(): Observable<any> {
    return this.resetData.asObservable();
  }

  getResetEvent(): Observable<any> {
    return this.resetTimer.asObservable();
  }

  getTimeUnit(): Observable<any> {
    return this.timeUnit.asObservable();
  }
}
