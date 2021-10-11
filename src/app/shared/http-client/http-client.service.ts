import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private readonly httpClient: HttpClient) {}

  get(route: string): Promise<any> {
    return this.httpClient
      .get(`${environment.httpBaseUrl}/${route}`)
      .toPromise();
  }

  post(route: string, data: any): Promise<Object> {
    return this.httpClient
      .post(`${environment.httpBaseUrl}/${route}`, data)
      .toPromise();
  }

  put(route: string, data: any): Promise<Object> {
    return this.httpClient
      .put(`${environment.httpBaseUrl}/${route}`, data)
      .toPromise();
  }

  delete(route: string): Promise<Object> {
    return this.httpClient
      .delete(`${environment.httpBaseUrl}/${route}`)
      .toPromise();
  }
}
