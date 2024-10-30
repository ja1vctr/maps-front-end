import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 8px 16px -10px rgba(0, 0, 0, 0.3)',
      },
    },
    colors: {
      verdeEscuro: '#35592A',
      verdeClaro: '#9DBA7A',
      cinzaTexto: '#9D9D9D',
      bgCinza: '#F5F5F5',
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  plugins: [],
}
export default config
