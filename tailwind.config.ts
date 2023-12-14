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
        'primary-white': '#ffffff',
        'secondary-black': '#000000',
        'dark-pink': '#FF007A',
        'light-pink': '#FF8BB7',
      },
      backgroundImage: {
        'header-button-bg': "url('../public/NavIcon.svg')",
      },
      content: {
        'nav-select-icon': "url('../public/NavIcon.svg')",
      },
      dropShadow: {
        'image-shadow': '0 0 30px #ffffff',
        'document-shadow': '0 0 10px #ffffff',
        'tip-shadow': '0 0 20px #FF007A',
        'story-shadow': '0 0 5px #FF007A',
      },
      boxShadow: {
        'title-shadow': '0px 0px 15px 0px #FF007A',
        'grade-shadow': '0px 0px 10px 0px #FF007A',
        'document-shadow': '0px 0px 15px 0px #FFFFFF',
      }
    },
    fontFamily: {
      ubuntu: ['var(--font-ubuntu)'],
      k2d: ['var(--font-k2d)'],
      exo2: ['var(--font-exo2)'],
      encode: ['var(--font-encode)'],
      inter: ['var(--font-inter)'],
      raleway: ['var(--font-raleway)'],
    }
  },
  plugins: [],
}
export default config
