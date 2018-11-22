import {
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatMenuModule,
  MatTableModule,
  MatDialogModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class AppMaterialModule {}
