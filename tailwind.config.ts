import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scrollbar: ['rounded'],
      colors: {
        'primary-black': '#0d0e12',
        'secondary-white': '#ffffff',
      },
      backgroundImage: {
        'header-button-bg': "url('../public/NavIcon.svg')",
      },
      content: {
        'nav-select-icon': "url('../public/NavIcon.svg')",
      },
      dropShadow: {
        'nav-logo-select-shadow': '0 0 5px #ffffff',
      },
      boxShadow: {
        'black-box-shadow': '0 0 10px 0 #0000004d',
      }
    },
    fontFamily: {
      ubuntu: ['var(--font-ubuntu)'],
      k2d: ['var(--font-k2d)'],
      exo2: ['var(--font-exo2)'],
      encode: ['var(--font-encode)'],
      exo: ['var(--font-exo)'],
    }
  },
  plugins: [],
}
export default config
