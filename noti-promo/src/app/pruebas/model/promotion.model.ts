export class Promotion {
  constructor(
    public id: number,
    public code: string,
    public discount: number,
    public expirationDate: string,
    public used: boolean = false
  ) {}
}
