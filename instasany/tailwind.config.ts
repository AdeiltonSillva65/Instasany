import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#1D3531', // definindo cores
        'green-actived': '#5D8A83',
        'green-border': '#2A4B46',
        'green-btn': '#CCEC60'
      },
      maxWidth:{
        grid: '77.5rem',
        'text-hero': '66rem',
        'area-icons': '855px',
        'area-mockups':'957px'
      },
      height: {
        'section-hero': '874px'
      },
      backgroundImage: {
        'hero': "url('/../bg-hero.svg')"
      }
    },
  },
  plugins: [],
}
export default config
