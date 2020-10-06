import { Convert } from "App/utils";

export default class {
  constructor(radius) {
    this.radius = radius;
  }
  getCoordinates(degrees) {
    const angle = Convert.toRadians(degrees);
    const x = Math.cos(angle) * this.radius;
    const y = Math.sin(angle) * this.radius;
    return { x, y };
  }
}
