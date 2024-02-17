import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IDomainResponseActor } from "../domain/actor.model";
import { IActorApiService } from "../infractructure/actor-api.interface";
import { HTTP_ACTOR_SERVICE } from "../infractructure/providers/actor-api.provider";

@Injectable({providedIn: 'root'})
export class ActorUseCaseService {
  constructor(@Inject(HTTP_ACTOR_SERVICE) private _actorApiService: IActorApiService) {}

  getActors(): Observable<IDomainResponseActor[]> {
    return this._actorApiService.getActors();
  }
}
