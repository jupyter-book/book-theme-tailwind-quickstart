const mystTheme = require("@myst-theme/styles");

module.exports = {
  darkMode: "selector",
  content: [
    // Parse styles from our markup
    "../content/**/*.md",
  ],
  theme: {
    extend: mystTheme.themeExtensions,
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: [],
};
