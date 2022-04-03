import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductsService } from './products.service';
// models
import { Product } from './../models/products.model';
// test
import * as fromProductsTest from '../test';

/**
 * **[Note] Temporarily disable tests as http requests have been
 * disabled for demo purposes
 */
xdescribe('ProductsService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;
  let testData: Product[] = fromProductsTest.productsMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('[class tests]', () => {
    it('should handle get products request', () => {
      service.getProducts().subscribe((data) => expect(data).toEqual(testData));
      const req = httpTestingController.expectOne(service.BASE_URL);
      expect(req.request.method).toBe('GET');
      req.flush(testData);
    });

    it('should handle get products request error', () => {
      const mockError = new ProgressEvent('error');
      const observer = {
        next: () => null,
        error: (error: HttpErrorResponse) =>
          expect((error as HttpErrorResponse).error).toEqual(mockError),
        complete: () => null,
      };
      service.getProducts().subscribe(observer);
      const req = httpTestingController.expectOne(service.BASE_URL);
      req.error(mockError);
    });

    it('should handle post product request on add', () => {
      const product = testData[0];
      service
        .addProduct(product)
        .subscribe((data) => expect(data).toEqual(product));
      const req = httpTestingController.expectOne(service.BASE_URL);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(product);
      req.flush(product);
    });

    it('should handle post products request error on add', () => {
      const product = testData[0];
      const mockError = new ProgressEvent('error');
      const observer = {
        next: () => null,
        error: (error: HttpErrorResponse) =>
          expect((error as HttpErrorResponse).error).toEqual(mockError),
        complete: () => null,
      };
      service.addProduct(product).subscribe(observer);
      const req = httpTestingController.expectOne(service.BASE_URL);
      req.error(mockError);
    });
  });
});
