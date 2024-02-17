import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IDomainActor, IDomainResponseActor } from "../domain/actor.model";
import { IActorApiService } from "../infractructure/actor-api.interface";
import { HTTP_ACTOR_SERVICE } from "../infractructure/providers/actor-api.provider";

@Injectable({providedIn: 'root'})
export class ActorUseCaseService {
  private readonly ACTORS_STORAGE: string = "ActorsData";
  private actors$ = new BehaviorSubject<IDomainActor[]>([]);

  constructor(@Inject(HTTP_ACTOR_SERVICE) private _actorApiService: IActorApiService) {}

  getActorsRapidApi(): Observable<IDomainResponseActor> {
    return this._actorApiService.getActorsRapid();
  }

  getActorsLocalStorage(): Observable<IDomainActor[]> {
    return this.actors$.asObservable();
  }

  saveInitLocalStorage(actorList: IDomainActor[]): void {
    localStorage.setItem(this.ACTORS_STORAGE, JSON.stringify(actorList));
    this.savePersistences(actorList);
  }

  getItemLocalStorage(name: string): IDomainActor[]{
    return JSON.parse(localStorage.getItem(name)!);
  }

  private savePersistences(actors: IDomainActor[]){
    this.actors$.next([...actors]);
  }

  add(actor: IDomainActor): void {
    let actorList = this.actors$.getValue();
    this.savePersistences([...actorList, actor]);
  }

  update(id: string, actor: IDomainActor): void {
    let actorList = this.actors$.getValue();
    let actorListFilter = actorList.filter(actor => actor._id !== id);
    this.savePersistences([...actorListFilter, actor]);
  }

  delete(id: string): void {
    let actorList = this.actors$.getValue();
    let actorListRemoved = actorList.filter(actor => actor._id !== id);
    this.savePersistences([...actorListRemoved]);
  }
}
