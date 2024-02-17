import { Observable } from "rxjs";
import { IDomainResponseActor } from "../domain/actor.model";

export interface IActorApiService {
  getActorsRapid(): Observable<IDomainResponseActor>;
}
