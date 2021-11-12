import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Languages } from './shared/enums/languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'dark-xmera-ui';
  isLoginRoute: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly spinnerService: NgxSpinnerService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang(Languages.Spanish);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      this.spinnerService.hide();
      if (event instanceof NavigationEnd) {
        if (event.url == '/') {
          this.isLoginRoute = true;
        } else {
          this.isLoginRoute = false;
        }
      }
    });
  }
}
