export class COURSE {
  id: number;
  name?: string;
  duration?: string;
  fees?: number;

  constructor(id: number, name: string, email: string, fees: number) {
    this.id = id;
    this.name = name;
    this.duration = email;
    this.fees = fees;
  }
}
