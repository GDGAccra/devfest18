import {
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [MatToolbarModule, MatListModule, MatIconModule, MatButtonModule]
})
export class AppMaterialModule {}
