import { Component, OnInit } from '@angular/core';
import { ActorUseCaseService } from '../../../domain/actor/application/actor-use-case.service';

@Component({
  selector: 'app-actors',
  template: `<mat-toolbar color="primary">
                <span>Crud Aplicación</span>
                <span class="example-spacer"></span>
            </mat-toolbar>
            <app-loader *ngIf="loading"></app-loader>
            <app-list></app-list>
            `,
})
export class ActorsComponent implements OnInit {

  loading = true;

  constructor(private _actorUseCaseServices: ActorUseCaseService) {}

  ngOnInit(): void {
    this.getActorsList();
  }

  getActorsList(): void {
    this._actorUseCaseServices.getActorsRapidApi().subscribe({
      next: (response) => {
          this._actorUseCaseServices.saveInitLocalStorage(response.results);
          this.loading = false;
        }
      });
  }
}
