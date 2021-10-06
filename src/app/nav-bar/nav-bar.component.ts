import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../shared/enums/languages';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input() drawer: MatDrawer;
  activeLang = 'es';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {
    this.drawer.open();
  }

  setLanguageToSpanish() {
    this.activeLang = Languages.Spanish;
    this.translate.use(Languages.Spanish);
  }

  setLanguageToEnglish() {
    this.activeLang = Languages.English;
    this.translate.use(Languages.English);
  }
}
