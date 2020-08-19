import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
>>>>>>> c33cf50915e73a55e43b48cad6f1b7bec7feac67

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
<<<<<<< HEAD
import { MatSidenavModule } from '@angular/material/sidenav';
=======
>>>>>>> c33cf50915e73a55e43b48cad6f1b7bec7feac67

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { MenuComponent } from './menu/menu.component';
=======
>>>>>>> c33cf50915e73a55e43b48cad6f1b7bec7feac67

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
<<<<<<< HEAD
    MenuComponent,
=======
>>>>>>> c33cf50915e73a55e43b48cad6f1b7bec7feac67
    
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
=======
>>>>>>> c33cf50915e73a55e43b48cad6f1b7bec7feac67
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
<<<<<<< HEAD
    MatSidenavModule,
    MatListModule,
=======
    MatListModule
>>>>>>> c33cf50915e73a55e43b48cad6f1b7bec7feac67
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
