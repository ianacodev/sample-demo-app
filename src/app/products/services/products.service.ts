import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// ngrx
import { Product } from '../models';
/*
 **For demo deployment, disable http requests to prevent data persist
 and supply static data
 */
// @ts-ignore
import * as productsDb from '../../../../mock-server/db/products';

@Injectable({
  providedIn: 'any',
})
export class ProductsService {
  readonly BASE_URL = '/api/products';

  constructor(private http: HttpClient) {}

  /**
   * get products
   * @returns observable of products | error
   */
  getProducts(): Observable<Product[] | HttpErrorResponse> {
    /*
    return this.http
      .get<Product[]>(this.BASE_URL)
      .pipe(catchError(this.handleError));
    */
    // **see notes above, disable http requests for demo purposes
    return of(productsDb);
  }

  /**
   * add product
   * @returns observable of product
   */
  addProduct(product: Product): Observable<Product | HttpErrorResponse> {
    /*
    return this.http.post<Product>(this.BASE_URL, product).pipe(
      catchError(this.handleError)
    );
    */
    // **see notes above, disable http requests for demo purposes
    const id = Math.random().toString(36).slice(2);
    const mockPersistedProduct = { ...product, id };
    return of(mockPersistedProduct);
  }

  /**
   * handle error
   * @param error
   * @returns observable of error
   */
  handleError(error: HttpErrorResponse): Observable<HttpErrorResponse> {
    return throwError(() => error);
  }
}
