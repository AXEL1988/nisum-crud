import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IDomainResponseActor } from "../domain/actor.model";
import { IActorApiService } from "./actor-api.interface";

@Injectable()
export class  ActorApiService implements IActorApiService {
  getActors(): Observable<IDomainResponseActor[]> {
    throw new Error("Method not implemented.");
  }
}
