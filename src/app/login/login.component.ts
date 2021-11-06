import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiGatewayHttpClientService } from '../shared/http-client/api-gateway-http-client.service';
import { Routes } from '../shared/routes';
import { LoginResponse } from './interfaces/login-response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  isLoading: boolean;

  constructor(
    private readonly apiGatewayHttpClientService: ApiGatewayHttpClientService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  async login() {
    this.isLoading = true;

    const response = await this.apiGatewayHttpClientService.post<LoginResponse>(
      Routes.securityRoutes.login,
      this.formGroup.value
    );

    if (response.success) {
      localStorage.setItem('token', response.data.token);
      this.router.navigate(['/dashboard']);
    }

    this.isLoading = false;
  }
}
