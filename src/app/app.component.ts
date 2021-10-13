import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dark-xmera-ui';

  constructor(
    private readonly router: Router,
    private readonly spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.spinnerService.hide();
    });
  }
}
