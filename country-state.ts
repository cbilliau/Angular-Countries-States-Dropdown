export class State {
  constructor(public id: number, public countryid: number, public abbr: string, public name: string) {}
}

export class Country {
  constructor(public id: number, public name: string) {}
}
