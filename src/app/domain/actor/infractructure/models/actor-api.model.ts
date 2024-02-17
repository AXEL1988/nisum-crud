export interface IApiResponseActor {
  page: string;
  next: string;
  entries: number;
  results: IActor[];
}

export interface IActor {
  _id: string;
  primaryName: string;
  birthYear: number;
  deathYear: number;
  primaryProfession: string;
  knownForTitles: string;
}
