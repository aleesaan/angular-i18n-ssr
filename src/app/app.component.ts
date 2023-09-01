import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Language, LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  localizedString = $localize`Localized using $localize`;

  constructor(
    @Inject(LOCALE_ID) public locale: Language,
    public languageService: LanguageService
  ) {}
}
