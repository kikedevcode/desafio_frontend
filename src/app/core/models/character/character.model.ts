export interface Character {
    name: string;
    // tslint:disable-next-line: variable-name
    birth_year: string;
    // tslint:disable-next-line: variable-name
    eye_color: string;
    gender: string;
    // tslint:disable-next-line: variable-name
    hair_color: string;
    homeworld: string;
    films: Array<string>;
    species: Array<string>;
    starships: Array<string>;
    vehicles: Array<string>;
    url: string;
    created: string;
    edited: string;
}
