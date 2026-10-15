// Permite custom properties (--mx, --d, --off…) en los objetos `style` de JSX.
import "csstype";

declare module "csstype" {
  interface Properties {
    [index: `--${string}`]: string | number;
  }
}
