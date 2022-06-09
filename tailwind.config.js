module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "primary-blue": "rgb(26, 148, 255)",
      "bg-search": "rgb(13, 92, 182)",
      text255: "rgb(255, 255, 255)",
      "border-color": "#dbd7d7",
      yellow: "rgb(253, 216, 54)",
      text128: "rgb(128, 128, 137)",
      "bg-price": "rgb(250, 250, 250)",
      "red-button": "rgb(255, 57, 69)",
      active: "rgb(13, 92, 182)",
    },
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
