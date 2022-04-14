import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/modules/components/route4/data.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  showStart: boolean = true;
  resetDataSubscription!: Subscription;
  @ViewChild('timeUnit') input: any;

  constructor(private dataService: DataService) {
    this.resetDataSubscription = this.dataService
      .getResetData()
      .subscribe((message) => {
        this.showStart = true;
        this.input.nativeElement.value = '';
      });
  }

  ngOnInit(): void {}

  toogleTimer(value: string, isPaused: boolean) {
    this.showStart = isPaused;
    this.dataService.emitTimeUnit(value, isPaused);
  }

  resetTimer(event: any) {
    event.value = '';
    this.showStart = true;
    this.dataService.emitReset();
  }
}
