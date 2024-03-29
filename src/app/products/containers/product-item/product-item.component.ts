import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRootStore from '../../../store';
// models
import { Product } from '../../models';
// animations
// animations
import { slideUpAnimation } from 'src/app/shared/animations';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideUpAnimation],
})
export class ProductItemComponent implements OnInit {
  color: string = '';
  product$: Observable<Product> | undefined;

  constructor(private store: Store<fromStore.ProductsState>) {}

  ngOnInit(): void {
    this.product$ = this.store.pipe(
      select(fromStore.selectProductByRouteParam)
    ) as Observable<Product>;
  }

  /**
   * on back
   */
  onBack(): void {
    this.store.dispatch(fromRootStore.go({ path: ['main', 'products'] }));
  }

  /**
   * on submit
   */
  onSubmit(product: Product): void {
    this.store.dispatch(fromStore.addProduct({ product }));
  }
}
