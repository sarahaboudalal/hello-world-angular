import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { MagnifierDirective } from './directives/magnifier.directive';
import { YearPipe } from './pipes/year.pipe';

@NgModule({
  declarations: [AppComponent, AppHomeComponent, MagnifierDirective, YearPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
