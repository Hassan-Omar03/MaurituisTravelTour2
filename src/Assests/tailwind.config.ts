import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { deep:'#0b2930', tealish:'#11c6c1' }
    },
  },
  plugins: [],
}
export default config
