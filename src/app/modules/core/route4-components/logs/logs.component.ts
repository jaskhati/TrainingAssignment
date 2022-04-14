import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/modules/components/route4/data.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnDestroy {
  timeStamps: Array<any> = [];
  timeUnitSubscription!: Subscription;
  resetSubscription!: Subscription;

  constructor(private dataService: DataService) {
    this.timeUnitSubscription = this.dataService
      .getTimeUnit()
      .subscribe((message) => {
        let state = message.isPaused ? 'Paused' : 'Started';
        this.addLogs(state);
      });
    this.timeUnitSubscription = this.dataService
      .getResetEvent()
      .subscribe((message) => {
        this.addLogs('Reset');
      });
  }

  addLogs(state: string) {
    this.timeStamps.push({
      time: new Date(),
      state: state,
    });
  }

  ngOnDestroy(): void {
    this.timeUnitSubscription && this.timeUnitSubscription.unsubscribe();
    this.resetSubscription && this.resetSubscription.unsubscribe();
  }
}
