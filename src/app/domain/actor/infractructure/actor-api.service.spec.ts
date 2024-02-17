import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ActorApiService } from "./actor-api.service";

const actorListMock = [{
  "page": 1,
  "next": "/actors?page=2",
  "entries": 10,
  "results": [
      {
          "_id": "617082fa2299cb9f2c2717ac",
          "nconst": "nm0000001",
          "primaryName": "Fred Astaire",
          "birthYear": 1899,
          "deathYear": 1987,
          "primaryProfession": "soundtrack,actor,miscellaneous",
          "knownForTitles": "tt0072308,tt0053137,tt0050419,tt0027125"
      },
      {
          "_id": "617082fa2299cb9f2c2717ad",
          "nconst": "nm0000005",
          "primaryName": "Ingmar Bergman",
          "birthYear": 1918,
          "deathYear": 2007,
          "primaryProfession": "writer,director,actor",
          "knownForTitles": "tt0083922,tt0069467,tt0050986,tt0050976"
      },
      {
          "_id": "617082fa2299cb9f2c2717ae",
          "nconst": "nm0000006",
          "primaryName": "Ingrid Bergman",
          "birthYear": 1915,
          "deathYear": 1982,
          "primaryProfession": "actress,soundtrack,producer",
          "knownForTitles": "tt0034583,tt0038787,tt0036855,tt0038109"
      },
      {
          "_id": "617082fa2299cb9f2c2717af",
          "nconst": "nm0000007",
          "primaryName": "Humphrey Bogart",
          "birthYear": 1899,
          "deathYear": 1957,
          "primaryProfession": "actor,soundtrack,producer",
          "knownForTitles": "tt0042593,tt0043265,tt0034583,tt0037382"
      },
      {
          "_id": "617082fa2299cb9f2c2717b0",
          "nconst": "nm0000008",
          "primaryName": "Marlon Brando",
          "birthYear": 1924,
          "deathYear": 2004,
          "primaryProfession": "actor,soundtrack,director",
          "knownForTitles": "tt0078788,tt0047296,tt0070849,tt0068646"
      },
      {
          "_id": "617082fa2299cb9f2c2717b1",
          "nconst": "nm0000009",
          "primaryName": "Richard Burton",
          "birthYear": 1925,
          "deathYear": 1984,
          "primaryProfession": "actor,soundtrack,producer",
          "knownForTitles": "tt0057877,tt0059749,tt0061184,tt0087803"
      },
      {
          "_id": "617082fa2299cb9f2c2717b2",
          "nconst": "nm0000010",
          "primaryName": "James Cagney",
          "birthYear": 1899,
          "deathYear": 1986,
          "primaryProfession": "actor,soundtrack,director",
          "knownForTitles": "tt0035575,tt0031867,tt0042041,tt0029870"
      },
      {
          "_id": "617082fa2299cb9f2c2717b3",
          "nconst": "nm0000011",
          "primaryName": "Gary Cooper",
          "birthYear": 1901,
          "deathYear": 1961,
          "primaryProfession": "actor,soundtrack,stunts",
          "knownForTitles": "tt0027996,tt0044706,tt0035896,tt0034167"
      },
      {
          "_id": "617082fa2299cb9f2c2717b4",
          "nconst": "nm0000012",
          "primaryName": "Bette Davis",
          "birthYear": 1908,
          "deathYear": 1989,
          "primaryProfession": "actress,soundtrack,make_up_department",
          "knownForTitles": "tt0035140,tt0031210,tt0042192,tt0056687"
      },
      {
          "_id": "617082fa2299cb9f2c2717b5",
          "nconst": "nm0000004",
          "primaryName": "John Belushi",
          "birthYear": 1949,
          "deathYear": 1982,
          "primaryProfession": "actor,soundtrack,writer",
          "knownForTitles": "tt0077975,tt0072562,tt0078723,tt0080455"
      }
  ]
}];

const httpClientMock = {
  get: jest.fn(),
};

describe('ActorApiService', () => {
  let services: ActorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActorApiService,
        { provide: HttpClient, useValue: httpClientMock}
      ]
    });

    services = TestBed.inject(ActorApiService);
    httpClientMock.get.mockReturnValue(of(actorListMock));
  });

  test('getActor http have been called', () => {
    services.getActorsRapid();
    expect(httpClientMock.get).toHaveBeenCalled();
  });

  test('getUser return ActorList', (done) => {
    services.getActorsRapid().subscribe((response) => {
      expect(response.entries).not.toBe(0);
      done();
    });
  });

});
