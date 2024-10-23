const twColors = require('tailwindcss/colors')

const businessColors = {
  primary: {
    DEFAULT: '#00BFFF', // Azul brillante
    50: '#E0F7FF',
    100: '#B2EBFF',
    200: '#80DEFF',
    300: '#00BFFF',
    400: '#009BFF',
    500: '#007FFF',
    600: '#0066CC',
    700: '#005BB5',
    800: '#004D99',
    900: '#003366'
  },
 secondary: {
    DEFAULT: '#36D759', // Verde brillante
    50: '#E6F8E3',
    100: '#C6E8B8',
    200: '#A3D88E',
    300: '#79C567',
    400: '#5CB04D',
    500: '#36D759', // Color principal
    600: '#2EB94E',
    700: '#26A144',
    800: '#1E8D3A',
    900: '#178D33'
  },
  tertiary: {
    DEFAULT: '#F0F0F0', // Gris claro
    700: '#D7D7D7'
  },
  font:{
    DEFAULT: '#F7F8F9'
  },
  primaryText: {
    DEFAULT: '#3A3A3A',
    50: '#B1B1B1',
    100: '#8A8A8A',
    200: '#707070',
    300: '#585858',
    400: '#404040',
    500: '#3A3A3A',
    600: '#333333',
    700: '#2D2D2D',
    800: '#262626',
    900: '#1F1F1F'
  },
  secondaryText: {
    DEFAULT: '#0D99CC', // Azul para texto secundario
    50: '#57C2E3',
    100: '#4BAED7',
    200: '#419BCB',
    300: '#3787BF',
    400: '#2F74B5',
    500: '#0D99CC', // Color de texto modal
    600: '#0A7FB2',
    700: '#067AA3',
    800: '#046B8D',
    900: '#045C78'
  },
    tree: {
    DEFAULT: '#111827', // Azul para texto secundario
    50: '#CBD5E0',
    100: '#A0AEC0',
    200: '#718096',
    300: '#4A5568',
    400: '#2D3748',
    500: '#1F2937', // Color de texto modal
    600: '#111827 ',
   
  },
  primaryBackground: {
    DEFAULT: '#FFFFFF',
    100: '#F8F9FA',
    200: '#F0F0F0',
    500: '#FFFFFF',
    600: '#F1F1F1',
    700: '#D7D7D7',
    800: '#B0B0B0',
    900: '#9A9A9A'
  },

  secondaryBackground: {
    DEFAULT: '#FFF4E0',
    100: '#FFE0B2 ',
    200: '#FFCC80 ',
    500: '#FFB74D ',
    600: '#FFA726',
    700: '#FF9800',
    800: '#FB8C00 ',
    900: '#F57C00'
  },
  primaryBorder: {
    DEFAULT: '#D1D5DB' // Color de borde gris claro
  },

  primarySwitch: {
    DEFAULT: '#B0BEC5' // Gris para switch
  },

  primaryNotification: {
    DEFAULT: '#E1F5FE' // Azul claro para notificaciones
  },
  primarySticker: {
    DEFAULT: '#F9F9F9',
  },
  primaryDelete: {
    DEFAULT: '#E63946', // Rojo brillante para eliminar
  }
}
  

const customContainer = {
  // you can configure the container to be centered
  center: true,

  // or have default horizontal padding
  padding: '1rem',

  // default breakpoints but with 40px removed
  screens: {
    sm: '600px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1460px',
  },
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ...twColors, ...businessColors }
    },
    container: customContainer
  },
  plugins: [require('@tailwindcss/typography')]
}
