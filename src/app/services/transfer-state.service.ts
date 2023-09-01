import { Injectable } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Language } from 'src/app/services/language.service';

export const APP_LANGUAGE_KEY = makeStateKey<Language>('appLanguage');

@Injectable({
  providedIn: 'root',
})
export class TransferStateService {
  constructor(private transferState: TransferState) {}

  get language() {
    return this.transferState.get(APP_LANGUAGE_KEY, 'en');
  }
}
