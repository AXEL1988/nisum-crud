import { Component, OnInit } from '@angular/core';
import { ActorUseCaseService } from '../../../domain/actor/application/actor-use-case.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
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
