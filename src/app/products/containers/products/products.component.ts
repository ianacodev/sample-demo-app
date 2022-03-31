import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRootStore from '../../../store';
// models
import { Product } from '../../models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(fromStore.selectProducts));
    this.store.dispatch(fromStore.loadProducts());
  }

  /**
   * on add product
   */
  onAddProduct(): void {
    this.store.dispatch(fromRootStore.go({ path: ['products', 'add'] }));
  }
}
