/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        scissors: {
          start: "hsl(39, 89%, 49%)",
          end: "hsl(40, 84%, 53%)",
        },
        paper: {
          start: "hsl(230, 89%, 62%)",
          end: "hsl(230, 89%, 65%)",
        },
        rock: {
          start: "hsl(349, 71%, 52%)",
          end: "hsl(349, 70%, 56%)",
        },
        lizard: {
          start: "hsl(261, 73%, 60%)",
          end: "hsl(261, 72%, 63%)",
        },
        spock: {
          start: "hsl(189, 59%, 53%)",
          end: "hsl(189, 58%, 57%)",
        },
        neutral: {
          darkText: "hsl(229, 25%, 31%)",
          scoreText: "hsl(229, 64%, 46%)",
          headerOutline: "hsl(217, 16%, 45%)",
        },
      },
      borderImage: {
        "scissors-gradient":
          "linear-gradient(to right, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        "paper-gradient":
          "linear-gradient(to right, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        "rock-gradient":
          "linear-gradient(to right, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        "lizard-gradient":
          "linear-gradient(to right, hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
        "spock-gradient":
          "linear-gradient(to right, hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
      },

      backgroundImage: {
        "background-radial":
          "radial-gradient(circle, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%)",
      },
    },
  },
  plugins: [],
};
