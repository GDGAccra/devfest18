import { AppRoutingModule } from './../app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TalkDialogComponent } from './talk-dialog/talk-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, TalkDialogComponent],
  exports: [HeaderComponent, FooterComponent, TalkDialogComponent],
  entryComponents: [TalkDialogComponent]
})
export class SharedModule {}
