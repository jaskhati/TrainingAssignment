import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/modules/components/route4/data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnDestroy {
  pauseCount: number = 0;
  startCount: number = 0;
  timeUnitSubscription!: Subscription;

  constructor(private dataService: DataService) {
    this.timeUnitSubscription = this.dataService
      .getTimeUnit()
      .subscribe((message) => {
        message.isPaused ? this.pauseCount++ : this.startCount++;
      });
  }

  ngOnDestroy(): void {
    this.timeUnitSubscription && this.timeUnitSubscription.unsubscribe();
  }
}
