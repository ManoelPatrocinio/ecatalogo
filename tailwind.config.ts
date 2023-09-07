import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['var(--font-kaushan-script)'],
      },
      colors:{
        'orange-800' : '#FF7C34',
        'orange-700' : '#FE8338',

        'gray-700' : '#767070',
        'gray-400' : '#CECECE',

        'whiter-800' : '#f9f9f9',

        'green-700' : '#1BCB75',
        'green-500' : '#00E676',

        'black-900' : '#2B2B2B',
        'black-700' : '#4D4D4D',
      }
    },
  },
  plugins: [],
}
export default config
