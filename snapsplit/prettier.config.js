/** @type {import("prettier").Config} */

module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 120,
  tabWidth: 2,
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
};
