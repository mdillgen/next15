import fluid, { extract } from 'fluid-tailwind';
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: {
    files: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    extract,
  },
  prefix: '',
  theme: {
    screens: {
      min: '20rem', // 320px
      xs: '28rem', // 448px
      sm: '40rem', // 640px
      md: '48rem', // 768px
      lg: '64rem', // 1024px
      xl: '80rem', // 1280px
      xl2: '96rem', // 1536px
      xl3: '105rem', // 1680px
      max: '112rem', // 1792px
      landscape: { raw: '(orientation: landscape)' },
      'hover-hover': { raw: '(hover: hover) and (pointer: fine)' },
    },
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }: { theme: any }) => ({
      defaultScreens: [theme('screens.min'), theme('screens.max')],
    }),
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: ({ theme }) => ({
        ...theme('spacing'),
      }),
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      fontSize: {
        xs: '0.875rem' /* 14px */,
        sm: '1rem' /* 16px */,
        md: '1.125rem' /* 18px */,
        lg: '1.25rem' /* 20px */,
        xl: '1.5rem' /* 24px */,
        xl2: '1.875rem' /* 30px */,
        xl3: '2.5rem' /* 40px */,
        xl4: '3.25rem' /* 52px */,
        xl5: '4.25rem' /* 68px */,
        xl6: '6.25rem' /* 100px */,
        xl7: '11.25rem' /* 180px */,
        xl8: '22.5rem' /* 360px */,
      },
      lineHeight: {
        xs: '1.156rem' /* 18.5px */,
        'xs-c': '1.125rem' /* 18px */,
        sm: '1.313rem' /* 21px */,
        'sm-c': '1.25rem' /* 20px */,
        md: '1.438rem' /* 23px */,
        'md-c': '1.375rem' /* 22px */,
        lg: '1.563rem' /* 25px */,
        'lg-c': '1.5rem' /* 24px */,
        xl: '1.813rem' /* 29px */,
        'xl-c': '1.688rem' /* 27px */,
        xl2: '2.125rem' /* 34px */,
        'xl2-c': '2rem' /* 32px */,
        xl3: '2.75rem' /* 44px */,
        'xl3-c': '2.5rem' /* 40px */,
        xl4: '3.25rem' /* 52px */,
        'xl4-c': '3rem' /* 48px */,
        xl5: '4rem' /* 64px */,
        'xl5-c': '3.75rem' /* 60px */,
        xl6: '5.5rem' /* 88px */,
        'xl6-c': '5.25rem' /* 84px */,
        xl7: '9.375rem' /* 150px */,
        'xl7-c': '8.75rem' /* 140px */,
        xl8: '18rem' /* 288px */,
        'xl8-c': '17.5rem' /* 280px */,
      },
      letterSpacing: {
        xs: '0.0175rem',
        sm: '0.01rem',
        md: '0.005rem',
        lg: '0rem',
        xl: '0rem',
        xl2: '0rem',
        xl3: '-0.005rem',
        xl4: '-0.02rem',
        xl5: '-0.075rem',
        xl6: '-0.15rem',
        xl7: '-0.5rem',
        xl8: '-1.125rem',
      },
      spacing: {
        18: '4.5rem' /* 72px */,
        26: '6.5rem' /* 104px */,
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'ping-ring': {
          to: { width: '2.75rem', height: '2.75rem', opacity: '0' },
        },
        wiggle: {
          '0%, 100%': {
            rotate: '0deg',
          },
          '5%': {
            rotate: '10deg',
          },
          '10%': {
            rotate: '-10deg',
          },
          '15%': {
            rotate: '0deg',
          },
        },
      },
    },
  },
  plugins: [
    fluid({
      checkSC144: false,
    }),
  ],
} satisfies Config;

export default config;
