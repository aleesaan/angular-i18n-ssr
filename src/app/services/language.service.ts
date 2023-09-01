import { inject, Injectable, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { clearTranslations, loadTranslations } from '@angular/localize';
import {
  setCookie,
} from 'typescript-cookie';
import fr from '@angular/common/locales/fr';

export const LANGUAGE_COOKIE = 'test_language';

const localesMap = {
  fr,
};

export type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language = inject<Language>(LOCALE_ID);

  async bootstrap() {
    if (this.language === 'en') {
      clearTranslations();

      return;
    }

    const { translations } = await import(
      `../../../locales/${this.language}.json`
    );

    loadTranslations(translations);
    registerLocaleData(localesMap[this.language]);
  }

  use(language: string) {
    setCookie(LANGUAGE_COOKIE, language);
    window.location.reload();
  }
}
