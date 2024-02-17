export interface IDomainResponseActor {
  page: string;
  next: string;
  entries: number;
  results: IDomainActor[];
}

export interface IDomainActor {
  _id: string;
  primaryName: string;
  birthYear: number;
  deathYear: number;
  primaryProfession: string;
  knownForTitles: string;
}
