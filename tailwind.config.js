/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./code.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#f9f9ff",
        "surface-dim": "#d7dae3",
        "surface-bright": "#f9f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f1f3fc",
        "surface-container": "#ebedf7",
        "surface-container-high": "#e6e8f1",
        "surface-container-highest": "#e0e2eb",
        "on-surface": "#181c22",
        "on-surface-variant": "#414753",
        "inverse-surface": "#2d3037",
        "inverse-on-surface": "#eef0fa",
        "outline": "#717785",
        "outline-variant": "#c1c6d5",
        "surface-tint": "#005db8",
        "primary": "#005cb8",
        "on-primary": "#ffffff",
        "primary-container": "#1275e2",
        "on-primary-container": "#000512",
        "inverse-primary": "#aac7ff",
        "secondary": "#465f88",
        "on-secondary": "#ffffff",
        "secondary-container": "#b6d0ff",
        "on-secondary-container": "#3f5881",
        "tertiary": "#574abe",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#7064d8",
        "on-tertiary-container": "#fffbff",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "primary-fixed": "#d6e3ff",
        "primary-fixed-dim": "#aac7ff",
        "on-primary-fixed": "#001b3e",
        "on-primary-fixed-variant": "#00458d",
        "secondary-fixed": "#d6e3ff",
        "secondary-fixed-dim": "#aec7f7",
        "on-secondary-fixed": "#001b3d",
        "on-secondary-fixed-variant": "#2d476f",
        "tertiary-fixed": "#e4dfff",
        "tertiary-fixed-dim": "#c6bfff",
        "on-tertiary-fixed": "#160066",
        "on-tertiary-fixed-variant": "#4232a7",
        "background": "#f9f9ff",
        "on-background": "#181c22"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "sm": "0.25rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "1.5rem",
        "margin": "2rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem"
      },
      fontFamily: {
        headline: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
}
