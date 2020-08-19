import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { MenuComponent } from './menu/menu.component';
=======
>>>>>>> c33cf50915e73a55e43b48cad6f1b7bec7feac67

const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
<<<<<<< HEAD
  },
  {
    path:'menu',
    component:MenuComponent
=======
>>>>>>> c33cf50915e73a55e43b48cad6f1b7bec7feac67
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
