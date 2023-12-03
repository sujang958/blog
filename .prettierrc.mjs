/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: false,
  endOfLine: "lf",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
