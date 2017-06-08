export class Home {
  public title: string;
  public minNumber: number;
  public maxNumber: number;

  constructor() {
    this.title = 'Home';
    this.minNumber = 3;
    this.maxNumber = 4;
  }

  public getNumberInRange(min: number, max: number): number {
    let randomNumber: number = Math.floor((Math.random() * max)) + min;

    return randomNumber;
  }
}