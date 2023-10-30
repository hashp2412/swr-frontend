module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cardboard: "url('/cardboard.png')",
        waves: "url('/waves.svg')",
        redstripes: "url('/red-stripes.svg')",
        introstripes: "url('/stripe.svg')",
        collage: "url('/collage.png')",
        reviewbg: "url('/review-bg.svg')",
        dentalbg: "url('/dental-banner.jpeg')",
        greypattern: "url('/grey-pattern.jpg')",
        bluebg: "url('/blue-bg-text.svg')",
        cardboardbg: "url('/cardboard-bg.png')",
        marblebg: "url('/marble-bg.png')",
        bluefiller: "url('/blue-filler.jpg')",

      },
      fontFamily: {
        abril: ['"Abril Fatface"', 'sans'],
        ibm: ['"IBM Plex Serif"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
        sofia: ['"Sofia Sans Condensed"', 'sans-serif'],
        young: ['"Young Serif"', 'serif'],
      },
      colors:{
        darkred: ["#891032"],
        red: ["#A4133C"],
        brightblue: ["#68ace5"],
        brightred2: ["#eb4245"],
        maroon: ["#6e0d28"],
        darkblue: ['#4da9ff'],
        
      }
    },
  },
  plugins: [],
};
