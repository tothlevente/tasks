/**
 * Represents a color scheme with a name and variations of the color.
 */
export interface Colors {
  name: string;
  colors: {
    default: string;
    light: string;
    dark: string;
  };
}

/**
 * An array of color objects, each containing a name and a set of color variations.
 *
 * @type {Colors[]}
 *
 * @property {string} name - The name of the color.
 * @property {Object} colors - An object containing different variations of the color.
 * @property {string} colors.default - The default shade of the color.
 * @property {string} colors.light - The light shade of the color.
 * @property {string} colors.dark - The dark shade of the color.
 *
 * @rules light: 200, default: 500, dark: 700
 *
 */
export const COLORS: Colors[] = [
  {
    name: "gray",
    colors: {
      default: "#6b7280",
      light: "#e5e7eb",
      dark: "#374151",
    },
  },
  {
    name: "yellow",
    colors: {
      default: "#eab308",
      light: "#fef08a",
      dark: "#a16207",
    },
  },
  {
    name: "red",
    colors: {
      default: "#ef4444",
      light: "#fecaca",
      dark: "#b91c1c",
    },
  },
  {
    name: "blue",
    colors: {
      default: "#0ea5e9",
      light: "#bae6fd",
      dark: "#0369a1",
    },
  },
  {
    name: "green",
    colors: {
      default: "#22c55e",
      light: "#bbf7d0",
      dark: "#15803d",
    },
  },
  {
    name: "pink",
    colors: {
      default: "#ec4899",
      light: "#fbcfe8",
      dark: "#be185d",
    },
  },
];
