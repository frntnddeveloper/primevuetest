import type { Config } from 'tailwindcss'
import tailwindcssPrimeUI from 'tailwindcss-primeui'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssPrimeUI],
}

export default config