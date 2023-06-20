/**
 *
 */

export class Graphics extends CanvasRenderingContext2D {
  private static instance: Graphics;
  private constructor() {
    super();
  }

  static getInstance(): Graphics {
    if (!Graphics.instance) {
      Graphics.instance = new Graphics();
    }
    return Graphics.instance;
  }

  private static createCanvasInDom(
    CSSselector: string,
    width: number,
    height: number
  ): CanvasRenderingContext2D {
    if (typeof window === "undefined") {
      throw new Error("The current environment does not support!");
    }
    let container = document.querySelector(CSSselector);
    if (!container) {
      throw new Error("The container does not exist!");
    }

    let canvas = document.createElement("canvas");

    canvas.width = width;
    canvas.height = height;
    container.appendChild(canvas);
    return canvas.getContext("2d");
  }
}
