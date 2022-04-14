import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  pageUrl: any;

  constructor(private router: Router) {
    this.pageUrl = this.router.url;
  }

  ngOnInit(): void {}
}
