export interface HttpResponse<T> {
  data: T;
  success: boolean;
  error: any;
}
