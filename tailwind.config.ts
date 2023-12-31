import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "amareloPadrao": "#F3D332",
      "preto": "#1D1D1B",
      "Light1": "#F9FBFF",
      "padraoCinzaC": "#111521",
      "padraoCinzaE": "#070B14",
      "padraoCinzaSC": "#1F2437",
      "dourado": "#F28D19",
      "blueButton": "#4476F9",
      "orangeButton": "#FB8B03",
      "CinzaPadrao": "#707070"
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
