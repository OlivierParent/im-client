class KeyboardControls {
  static #MOVE_SPEED = 0.1;
  static #DIRECTION = {
    BACK: -1,
    DOWN: -1,
    FORWARD: 1,
    LEFT: -1,
    NONE: 0,
    RIGHT: 1,
    UP: 1,
  };

  static #forwardDirection = KeyboardControls.#DIRECTION.NONE;
  static #rightDirection = KeyboardControls.#DIRECTION.NONE;
  static #upDirection = KeyboardControls.#DIRECTION.NONE;

  static get MOVE_SPEED() {
    return KeyboardControls.#MOVE_SPEED;
  }

  static get forwardDirection() {
    return KeyboardControls.#forwardDirection;
  }

  static get rightDirection() {
    return KeyboardControls.#rightDirection;
  }

  static get upDirection() {
    return KeyboardControls.#upDirection;
  }

  static keyDownHandler(event) {
    console.log("keyDownHandler", `${event.key}`);
    switch (event.key) {
      case "ArrowDown":
      case "s":
        KeyboardControls.#forwardDirection = KeyboardControls.#DIRECTION.BACK;
        break;
      case "ArrowLeft":
      case "a":
        KeyboardControls.#rightDirection = KeyboardControls.#DIRECTION.LEFT;
        break;
      case "ArrowRight":
      case "d":
        KeyboardControls.#rightDirection = KeyboardControls.#DIRECTION.RIGHT;
        break;
      case "ArrowUp":
      case "w":
        KeyboardControls.#forwardDirection =
          KeyboardControls.#DIRECTION.FORWARD;
        break;
      case "f":
        KeyboardControls.#upDirection = KeyboardControls.#DIRECTION.DOWN;
        break;
      case "r":
        KeyboardControls.#upDirection = KeyboardControls.#DIRECTION.UP;
        break;
    }
  }

  static keyUpHandler(event) {
    console.log("keyUpHandler", `${event.key}`);
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
      case "s":
      case "w":
        KeyboardControls.#forwardDirection = KeyboardControls.#DIRECTION.NONE;
        break;
      case "ArrowLeft":
      case "ArrowRight":
      case "a":
      case "d":
        KeyboardControls.#rightDirection = KeyboardControls.#DIRECTION.NONE;
        break;
      case "f":
      case "r":
        KeyboardControls.#upDirection = KeyboardControls.#DIRECTION.NONE;
        break;
    }
  }

  static addEventListeners() {
    console.info("addEventListeners");
    window.addEventListener("keydown", KeyboardControls.keyDownHandler);
    window.addEventListener("keyup", KeyboardControls.keyUpHandler);
  }

  static removeEventListeners() {
    console.info("removeEventListeners");
    window.removeEventListener("keydown", KeyboardControls.keyDownHandler);
    window.removeEventListener("keyup", KeyboardControls.keyUpHandler);
  }
}

export default KeyboardControls;
