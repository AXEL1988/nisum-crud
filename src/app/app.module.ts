import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ACTOR_API_PROVIDER } from './domain/actor/infractructure/providers/actor-api.provider';
import { ACTOR_INTERCEPTOR } from './domain/actor/infractructure/providers/app-interceptor';

//Custom Components
import { ActorsComponent } from './ui/pages/actors/actors.component';
import { CreateUpdateComponent } from './ui/view-models/actor/create-update/create-update.component';
import { ListComponent } from './ui/view-models/actor/list/list.component';

// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    CreateUpdateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [ACTOR_INTERCEPTOR, ACTOR_API_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
