class Clock {
  private hourHand: HTMLElement;
  private minuteHand: HTMLElement;
  private secondHand: HTMLElement;

  constructor(hourHandId: string, minuteHandId: string, secondHandId: string) {
    this.hourHand = this.getElement(hourHandId);
    this.minuteHand = this.getElement(minuteHandId);
    this.secondHand = this.getElement(secondHandId);
    this.update();
    setInterval(() => this.update(), 1000);
  }


  private getElement(id: string): HTMLElement {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Element with ID "${id}" not found.`);
    }
    return element;
  }

  private update(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12) * 30 + minutes / 2;
    const minuteDeg = minutes * 6 + seconds / 10;
    const secondDeg = seconds * 6;


    this.hourHand.style.transform = `rotate(${hourDeg}deg)`;
    this.minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    this.secondHand.style.transform = `rotate(${secondDeg}deg)`;
  }
}

export default Clock;
