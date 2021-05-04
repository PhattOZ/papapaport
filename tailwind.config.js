module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand"],
        satisfy: ["Satisfy"],
        brygada: ["Brygada 1918"],
      },
      backgroundImage: { "main-bg": "url('/img/me.jpg')" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
