import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LanguageService } from 'src/app/services/language.service';
import { TransferStateService } from 'src/app/services/transfer-state.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useFactory: ({ language }: TransferStateService) =>
        language,
      deps: [TransferStateService],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (languageService: LanguageService) => () =>
        languageService.bootstrap(),
      deps: [LanguageService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
