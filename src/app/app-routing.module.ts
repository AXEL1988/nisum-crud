import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './ui/pages/actors/actors.component';

const routes: Routes = [
  { path: '', redirectTo: 'actor', pathMatch: 'full'},
  {path: 'actor', title: 'Actores',  component: ActorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
