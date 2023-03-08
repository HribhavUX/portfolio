/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          PoB: "PoppinsBold",
          PoM: "PoppinsMedium",
          PoR: "PoppinsRegular",
          PoS: "PoppinsSemiBold",
          PoL: "PoppinsLight",
          CoR: 'ComfortaaRegular',
          CoB: 'ComfortaaBold',
          CoL: 'ComfortaaLight',
          CoM: 'ComfortaaMedium',
          CoS: 'ComfortaaSemiBold',
          Ga: 'GlassAntiqua',
          Sgl: 'SpaceGroteskLight',
          Sgm: 'SpaceGroteskMedium',
          Sgr: 'SpaceGroteskRegular',
          Sgb: 'SpaceGroteskBold',
          Sgs: 'SpaceGroteskSemiBold',
          KaB: 'KarantinaBold',
          KaR: 'KarantinaRegular',
          KaL: 'KarantinaLight',
          Ava: 'Ava',
        }
    },
  },
  plugins: [],
}
