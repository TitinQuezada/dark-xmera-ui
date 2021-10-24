import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiGatewayHttpClientService {
  constructor(private readonly httpClient: HttpClient) {}

  get(route: string): Promise<any> {
    return this.httpClient
      .get(`${environment.apiGatewayUrl}/${route}`)
      .toPromise();
  }

  post(route: string, data: any): Promise<any> {
    return this.httpClient
      .post(`${environment.apiGatewayUrl}/${route}`, data)
      .toPromise();
  }

  put<T>(route: string, id: string, data: any): Promise<any> {
    return this.httpClient
      .put(`${environment.apiGatewayUrl}/${route}/${id}`, data)
      .toPromise();
  }

  delete(route: string, id: string): Promise<any> {
    return this.httpClient
      .delete(`${environment.apiGatewayUrl}/${route}/${id}`)
      .toPromise();
  }
}
