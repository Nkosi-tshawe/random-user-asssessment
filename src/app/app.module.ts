import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserThemeComponent } from './user-theme/user-theme.component';
import {MouseDirective } from './user-theme/mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserThemeComponent,
    MouseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [UserThemeComponent]
})
export class AppModule { }
