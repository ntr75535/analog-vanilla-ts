import { Clock } from "./clock";

const clock = new Clock("clock-container");

function updateClock() {
  clock.update();
  requestAnimationFrame(updateClock);
}

updateClock();
