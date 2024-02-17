import { Component } from '@angular/core';
import { ActorUseCaseService } from '../../../../domain/actor/application/actor-use-case.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(private _actorService: ActorUseCaseService) {}

  ngOnInit(): void {
  this.getActorsList();
  }

  getActorsList(): void {
    this._actorService.getActors().subscribe();
  }
}
