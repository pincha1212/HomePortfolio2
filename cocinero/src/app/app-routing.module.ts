import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path : '', component: AppComponent},   
  {path : 'sobre-mi', component: SobreMiComponent},
  {path : 'menu', component: MenuComponent},
  {path : '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
