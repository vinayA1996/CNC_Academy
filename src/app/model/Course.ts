export class COURSE {
  id: number;
  name?: string;
  duaration?: string;
  fees?: number;

  constructor(id: number, name: string, email: string, fees: number) {
    this.id = id;
    this.name = name;
    this.duaration = email;
    this.fees = fees;
  }
}
