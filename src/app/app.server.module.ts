import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TransferStateServerService } from 'src/app/services/transfer-state.server.service';
import { TransferStateService } from 'src/app/services/transfer-state.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: TransferStateService,
      useClass: TransferStateServerService,
    }
  ]
})
export class AppServerModule {}
