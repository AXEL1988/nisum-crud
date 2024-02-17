import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ACTOR_API_PROVIDER } from './domain/actor/infractructure/providers/actor-api.provider';
import { AppInterceptor } from './domain/actor/infractructure/providers/app-interceptor';

//Custom Components
import { ActorsComponent } from './ui/pages/actors/actors.component';
import { CreateUpdateComponent } from './ui/view-models/actor/create-update/create-update.component';
import { ListComponent } from './ui/view-models/actor/list/list.component';


import { MaterialModule } from './material.module';
import { LoaderComponent } from './ui/common/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    CreateUpdateComponent,
    ListComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true}, ACTOR_API_PROVIDER, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
