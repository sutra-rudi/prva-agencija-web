import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-basic': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        easeFadeBasic: 'fade-in-basic 350ms ease-in-out forwards',
      },
      colors: {
        'brand-clr': '#4E4848',
        'almost-black': '#181816',
        'almost-white': '#F8F7F2',
        'primary-light': '#C3C6B6',
        'secondary-light': '#DDDFD6',
        'primary-dark': '#26312B',
        'secondary-dark': '#11201D',
        accent: '#8B9554',
        error: '#FF7A00',
        success: '#C6FF00',
        info: '#8C946F',
        sutraCardDivider: '#D9D9D9',
        sutraButtonTextColor: '#2E363E',
        sutraContactUsTempBg: '#FBFBFB',
        sutraPlaceholderClr: '#8D8D8D',
        sutraRadioBgUnchecked: '#E0E0E0',
        //PRVA
        'prva-svijetla-boja': '#C3C6B6',
        'prva-tamnozelena-boja': '#26312B',
        'prva-tamnija-boja': '#818272',
        'prva-tamna-boja': '#181816',
        'prva-text-color': '#26312b',
        'prva-subtext': 'rgb(129, 130, 114)',
        'prva-blida': '#4E4848',
        ///
        sutraButtonText: '#F0FDF4',
      },

      //BG-COLORS-BUTTON
      backgroundImage: {
        sutraGradientButton: 'linear-gradient(180deg, rgba(90,93,82,1) 0%, rgba(36,41,40,1) 100%)',
        sutraGradientButtonDark: 'linear-gradient(180deg, rgba(188,192,175,1) 0%, rgba(178,182,137,1) 100%)',
      },
      //OUTLINE
      outlineWidth: {
        sutraButtonOutline: '2px',
        sutraButtonOutlineAsPrim: '1px',
        sutraButtonOutlineAsPrimHover: '2.5px',
      },
      //OPACITY
      opacity: {
        ghostButtonOpacity: '0.5',
      },

      fontSize: {
        h1: '3.4375rem',
        h2: '2.5rem',
        h3: '1.875rem',
        h4: '1.3125rem',
        body: '1.125rem',
        default: '1rem',
        small: '0.875rem',
        tag: '0.75rem',
        contactFormSidebarHeading: '1.75rem',
        //////// FIGMA ///////
        h0_2xl: '4.5rem',
        h1_xl: '3.75rem',
        h2_lg: '3rem',
        h3_md: '2.25rem',
        h4_sm: '1.875rem',
        h5_xs: '1.5rem',
        xl: '1.25rem',
        lg: '1.125rem',
        md: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
        base: '1rem',
      },

      borderRadius: {
        sutraCardBorderRadius: '4px',
        sutraCardTagBorderRadius: '6px',
        sutraContactCardBorderRadius: '10px',
        sutraContactFormButton: '5px',
        sutraObavijestTrakaRadius: '12px',
        //BUTTONS//
        sutraButtonBorderRadiusSmall: '20px',
        sutraButtonBorderRadiusBase: '46px',
        sutraButtonBorderRadiusLarge: '56px',
      },

      lineHeight: {
        sutraCardTitleLineHeight: '32px',
      },
      maxWidth: {
        sutraBlogTestMaxWidth: '750px',
        sutraContactUsTempFormWidth: '1200px',
      },
      screens: {
        'prva-custom-break': '817px',
        'prva-custom-news-break': '1128px',
      },

      //FONT FAMILY

      fontFamily: {
        SERIF: ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar'), require('@tailwindcss/forms')],
};
export default config;
