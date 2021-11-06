import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpResponse } from './http-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiGatewayHttpClientService {
  constructor(private readonly httpClient: HttpClient) {}

  get<T>(route: string): Promise<HttpResponse<T>> {
    return this.httpClient
      .get<HttpResponse<T>>(`${environment.apiGatewayUrl}/${route}`)
      .toPromise();
  }

  post<T>(route: string, data: any): Promise<HttpResponse<T>> {
    return this.httpClient
      .post<HttpResponse<T>>(`${environment.apiGatewayUrl}/${route}`, data)
      .toPromise();
  }

  put<T>(route: string, id: string, data: any): Promise<HttpResponse<T>> {
    return this.httpClient
      .put<HttpResponse<T>>(`${environment.apiGatewayUrl}/${route}/${id}`, data)
      .toPromise();
  }

  delete<T>(route: string, id: string): Promise<HttpResponse<T>> {
    return this.httpClient
      .delete<HttpResponse<T>>(`${environment.apiGatewayUrl}/${route}/${id}`)
      .toPromise();
  }
}
