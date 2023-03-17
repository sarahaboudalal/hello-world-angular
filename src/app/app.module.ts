import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { MagnifierDirective } from './magnifier.directive';

@NgModule({
  declarations: [AppComponent, AppHomeComponent, MagnifierDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
