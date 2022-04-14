import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/constants/constants';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss'],
})
export class Route2Component {
  products!: Array<any>;
  grid: boolean = true;
  table: boolean = false;

  constructor() {
    this.products = PRODUCTS;
    this.products.forEach(
      (n, i) => (n.filename = `https://picsum.photos/id/${i + 1}/900/500`)
    );
  }

  changeView(view: string) {
    if (view === 'grid') {
      this.grid = true;
      this.table = false;
    } else {
      this.table = true;
      this.grid = false;
    }
  }

  sortProducts(key: string) {
    if (key === 'l2h') {
      this.products = this.products.sort((a, b) => a.price - b.price);
    } else {
      this.products = this.products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }
}
