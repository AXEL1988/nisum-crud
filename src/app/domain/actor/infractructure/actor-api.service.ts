import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { IDomainResponseActor } from "../domain/actor.model";
import { IActorApiService } from "./actor-api.interface";
import { IApiResponseActor } from "./models/actor-api.model";

@Injectable()
export class  ActorApiService implements IActorApiService {

  private readonly urlApi = environment.api;
  private readonly API_KEY = environment.XRapidAPIKey;
  private readonly API_HOST = environment.XRapidAPIHost;

  constructor(private _httpClient: HttpClient) {}

  getActorsRapid(): Observable<IDomainResponseActor> {
    const headers = new HttpHeaders({
			'X-RapidAPI-Key': '8f1acd41d3msh0e8ca8b0f23e38bp1065e0jsnbba945aeb4a0',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
		});

		const options = { headers: headers };

      return this._httpClient
			.get<IApiResponseActor>(this.urlApi, options)
			.pipe(map((actorApi) => ({ ...actorApi })));
  }
}
