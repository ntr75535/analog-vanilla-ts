export class Clock {
  private hourHand: HTMLElement;
  private minuteHand: HTMLElement;
  private secondHand: HTMLElement;

  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with ID "${containerId}" not found.`);
    }

    this.hourHand = container.querySelector(".hour-hand") as HTMLElement;
    this.minuteHand = container.querySelector(".minute-hand") as HTMLElement;
    this.secondHand = container.querySelector(".second-hand") as HTMLElement;
  
  }

  update() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = (hours * 30) + (minutes/2);
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;
    
    this.hourHand.style.transform = `rotate(${hourAngle}deg)`;
    this.minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    this.secondHand.style.transform = `rotate(${secondAngle}deg)`;
  }
}
