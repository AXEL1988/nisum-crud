import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorsComponent } from './actors/actors.component';
import { CreateupdatedActorComponent } from './ui/view-models/createupdated-actor/createupdated-actor.component';
import { CreateUpdateComponent } from './ui/view-models/actor/create-update/create-update.component';
import { ListComponent } from './ui/view-models/actor/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    CreateupdatedActorComponent,
    CreateUpdateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
