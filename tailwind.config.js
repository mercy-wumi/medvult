/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      purple: {
        background: {
          body: "#0D366C",
          form: "#E9F2FE",
        },
        button: {
          first: "#1E78F0",
          second: "#9716CA",
        },
      },
      border: {
        form: "#B5B5B5",
      },
    },
  },
  plugins: [],
};
