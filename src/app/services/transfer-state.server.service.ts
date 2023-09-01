import { Inject, Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { APP_LANGUAGE_KEY } from 'src/app/services/transfer-state.service';
import { getLanguageFromReq } from 'src/app/utils/get-language-from-req';

@Injectable({
  providedIn: 'root',
})
export class TransferStateServerService {
  constructor(
    @Inject(REQUEST) private request: Request,
    private transferState: TransferState,
  ) {
    this.bootstrap();
  }

  get language() {
    return this.transferState.get(APP_LANGUAGE_KEY, 'en');
  }

  private bootstrap() {
    this.transferState.set(APP_LANGUAGE_KEY, getLanguageFromReq(this.request));
  }
}
