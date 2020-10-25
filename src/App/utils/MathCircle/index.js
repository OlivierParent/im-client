import * as THREE from "three";

export default class {
  #radius = 1;
  #angle = 0;

  constructor(radius = 1) {
    this.#radius = radius;
  }

  get angle() {
    return this.#angle;
  }

  set angle(degrees) {
    this.#angle = THREE.MathUtils.degToRad(degrees);
  }

  getCoordinates(degrees) {
    this.angle = degrees;
    const x = Math.cos(this.angle) * this.#radius;
    const y = Math.sin(this.angle) * this.#radius;

    return { x, y };
  }
}
