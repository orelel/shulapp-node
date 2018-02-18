import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopLeftNavbarComponent } from './top-left-navbar/top-left-navbar.component';
import { TopRightNavbarComponent } from './top-right-navbar/top-right-navbar.component';
import { NavDropdownComponent } from './nav-dropdown-item/nav-dropdown.component';
import { DropdownItemComponent } from './nav-dropdown-item/dropdown-item/dropdown-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopLeftNavbarComponent,
    TopRightNavbarComponent,
    NavDropdownComponent,
    DropdownItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
