import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// ngrx
import { Product } from '../models';

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
    return this.http
      .get<Product[]>(this.BASE_URL)
      .pipe(catchError(this.handleError));
  }

  /**
   * add product
   * @returns observable of product
   */
  addProduct(product: Product): Observable<Product | HttpErrorResponse> {
    return this.http
      .post<Product>(this.BASE_URL, product)
      .pipe(catchError(this.handleError));
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
