import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/modules/components/route4/data.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnDestroy {
  timeUnit: number = 0;
  timeUnitSubscription!: Subscription;
  resetSubscription!: Subscription;
  timer: any;
  isPaused: boolean = false;

  constructor(private dataService: DataService) {
    this.timeUnitSubscription = this.dataService
      .getTimeUnit()
      .subscribe((message) => {
        this.toogleTimer(message);
      });
    this.resetSubscription = this.dataService
      .getResetEvent()
      .subscribe((message) => {
        this.resetTimer();
      });
  }

  toogleTimer(data: any) {
    this.isPaused = data.isPaused;
    if (!data.isPaused && data.value && !this.timer) {
      this.timeUnit = parseInt(data.value);
      this.timer = window.setInterval(() => {
        if (!this.isPaused) {
          this.timeUnit = this.timeUnit - 1;
          if (this.timeUnit === 0) {
            clearInterval(this.timer);
            this.timer = null;
            this.dataService.emitResetData();
          }
        }
      }, 1000);
    }
  }

  resetTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.timeUnit = 0;
    }
  }

  ngOnDestroy(): void {
    this.timeUnitSubscription && this.timeUnitSubscription.unsubscribe();
    this.resetSubscription && this.resetSubscription.unsubscribe();
  }
}
