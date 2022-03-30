import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// ngrx
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';

@Injectable({
  providedIn: 'root',
})
export class ProductsGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.pipe(
      select(fromStore.selectProductIds),
      map((productIds) => {
        const { productId } = route.params;
        const productExists = productIds.includes(productId);
        return productExists ? true : this.router.createUrlTree(['products']);
      })
    );
  }
}
