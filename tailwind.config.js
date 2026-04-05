

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-fixed-dim": "#aec7f7",
        "secondary-fixed-dim": "#bcc7dd",
        "surface-variant": "#d8e3fa",
        "surface-container-highest": "#d8e3fa",
        "on-error-container": "#93000a",
        "on-tertiary-fixed-variant": "#723600",
        "surface-container-low": "#f0f3ff",
        "outline": "#74777f",
        "on-secondary": "#ffffff",
        "on-primary-container": "#87a0cd",
        "surface-container": "#e7eeff",
        "primary-fixed": "#d6e3ff",
        "on-primary": "#ffffff",
        "error": "#ba1a1a",
        "surface-container-high": "#dee8ff",
        "on-tertiary": "#ffffff",
        "outline-variant": "#c4c6cf",
        "tertiary-fixed": "#ffdcc6",
        "secondary-container": "#d5e0f7",
        "secondary-fixed": "#d8e3fa",
        "surface-container-lowest": "#ffffff",
        "background": "#f9f9ff",
        "on-secondary-container": "#586377",
        "on-secondary-fixed": "#111c2c",
        "on-tertiary-container": "#f77d03",
        "error-container": "#ffdad6",
        "inverse-on-surface": "#ebf1ff",
        "primary-container": "#1b365d",
        "tertiary": "#381800",
        "on-primary-fixed-variant": "#2e476f",
        "on-tertiary-fixed": "#311300",
        "inverse-primary": "#aec7f7",
        "on-secondary-fixed-variant": "#3c475a",
        "on-surface-variant": "#44474e",
        "inverse-surface": "#263142",
        "on-surface": "#111c2c",
        "tertiary-container": "#582900",
        "surface-dim": "#cfdaf1",
        "secondary": "#545f72",
        "surface": "#f9f9ff",
        "on-background": "#111c2c",
        "primary": "#002046",
        "surface-tint": "#465f88",
        "on-error": "#ffffff",
        "surface-bright": "#f9f9ff",
        "on-primary-fixed": "#001b3d",
        "tertiary-fixed-dim": "#ffb786"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
