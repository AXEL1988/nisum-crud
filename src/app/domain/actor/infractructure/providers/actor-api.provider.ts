import { InjectionToken, Provider } from "@angular/core";
import { IActorApiService } from "../actor-api.interface";
import { ActorApiService } from "../actor-api.service";

export const HTTP_ACTOR_SERVICE = new InjectionToken<IActorApiService>('ActorApiService');
export const ACTOR_API_PROVIDER: Provider = {
  provide: HTTP_ACTOR_SERVICE,
  useClass: ActorApiService
};
