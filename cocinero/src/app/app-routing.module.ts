import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { GaleriaFotosComponent } from './components/galeria-fotos/galeria-fotos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BlogComponent } from './components/blog/blog.component';




const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'home', component: HomeComponent},   
  {path : 'sobre-mi', component: SobreMiComponent},
  {path : 'menu', component: MenuComponent},
  {path : 'galeria-fotos', component: GaleriaFotosComponent},
  {path : 'contacto', component: ContactoComponent},
  {path : 'blog', component: BlogComponent},
  {path : '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
