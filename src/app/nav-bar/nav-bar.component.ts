import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../shared/enums/languages';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  activeLang = 'es';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {}

  setLanguageToSpanish() {
    this.activeLang = Languages.Spanish;
    this.translate.use(Languages.Spanish);
  }

  setLanguageToEnglish() {
    this.activeLang = Languages.English;
    this.translate.use(Languages.English);
  }
}
