import * as THREE from "three";

export default class {
  constructor(radius) {
    this.radius = radius;
  }
  getCoordinates(degrees) {
    const angle = THREE.MathUtils.degToRad(degrees);
    const x = Math.cos(angle) * this.radius;
    const y = Math.sin(angle) * this.radius;
    return { x, y };
  }
}
