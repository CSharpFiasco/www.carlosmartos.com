declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.pdf'

declare module 'colorthief' {
  export type RGBColor = [number, number, number];
  export default class ColorThief {
    getColor: (img: HTMLImageElement | null, quality: number = 10) => RGBColor;
    getPalette: (img: HTMLImageElement | null, colorCount: number = 10, quality: number = 10) => RGBColor[];
  }
}