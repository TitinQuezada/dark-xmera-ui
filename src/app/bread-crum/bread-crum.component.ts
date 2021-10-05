import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-bread-crum',
  templateUrl: './bread-crum.component.html',
  styleUrls: ['./bread-crum.component.css'],
})
export class BreadCrumComponent implements OnInit {
  constructor(
    private breadcrumbService: BreadcrumbService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.setDefaultBreadCrums();
    this.observeLanguageChange();
  }

  setDefaultBreadCrums() {
    this.translateService.onDefaultLangChange.subscribe(({ translations }) => {
      const translationKeys = Object.keys(translations);

      translationKeys.forEach((key) => {
        this.setBreadCrumLabel(key, translations[key]);
      });
    });
  }

  observeLanguageChange(): void {
    this.translateService.onLangChange.subscribe(({ translations }) => {
      const translationKeys = Object.keys(translations);

      translationKeys.forEach((key) => {
        this.setBreadCrumLabel(key, translations[key]);
      });
    });
  }

  setBreadCrumLabel(key: string, label: string): void {
    this.breadcrumbService.set(`@${key}`, label);
  }
}
