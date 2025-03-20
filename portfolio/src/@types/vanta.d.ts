// declare module "vanta/dist/vanta.globe.min" {
//     const GLOBE: any;
//     export default GLOBE;
// }

// declare module "vanta/dist/vanta.rings.min" {
//     const RINGS: any;
//     export default RINGS;
// }

// import * as THREE from "three";

declare module "vanta" {
  // Options common to all Vanta effects.
  export interface VantaOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    color?: number;
    color2?: number;
    // Allow additional options that might be specific to an effect.
    [key: string]: unknown;
  }

  // The object returned by a Vanta effect.
  export interface VantaEffect {
    destroy: () => void;
  }
}

declare module "vanta/dist/vanta.globe.min" {
  import { VantaOptions, VantaEffect } from "vanta";
  const GLOBE: (options: VantaOptions) => VantaEffect;
  export default GLOBE;
}

declare module "vanta/dist/vanta.rings.min" {
  import { VantaOptions, VantaEffect } from "vanta";
  const RINGS: (options: VantaOptions) => VantaEffect;
  export default RINGS;
}