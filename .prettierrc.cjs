module.exports = {
  plugins: [require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: false,
  singleQuote: false,
  bracketSpacing: true,
  endOfLine: "lf",
}
