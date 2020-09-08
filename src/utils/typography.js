import Typography from "typography"

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.7,
  scaleRatio: 1.7,  
  bodyFontFamily: ['Public Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  headerWeight: 500,
  headerColor: 'hsl(0,0%,0%,0.8)',
  boldWeight: 500,
  bodyWeight: 300,
  googleFonts: [
    {
      name: 'PUblic Sans',
      styles: [
        '300',
        '500'
      ],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h2: {
      marginBottom: '0.5rem',
    },
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
