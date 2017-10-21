import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule  } from '@angular/http';

import { AppComponent } from './app.component';
import { DesignComponent } from './design/design.component';
import { UsersComponent } from './users/users.component';
import { appRouterModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
