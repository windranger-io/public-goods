import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
        @font-face {
          font-family: 'Nib Regular Pro';
          font-style: normal;
          font-display: swap;
          src: url('./fonts/nib-regular-pro.woff2') format('woff2'), url('./fonts/nib-regular-pro.woff') format('woff');

        }
      /* latin */
        @font-face {
          font-family: 'Nib Italic Pro';
          font-style: normal;
          font-display: swap;
          src: url('./fonts/nib-italic-pro.woff2') format('woff2'), url('./fonts/nib-italic-pro.woff') format('woff');

        }
      /* latin */
        @font-face {
          font-family: 'Nib Semibold Pro';
          font-style: normal;
          font-display: swap;
          src: url('./fonts/nib-semibold-pro.woff2') format('woff2'), url('./fonts/nib-semibold-pro.woff') format('woff');

        }
      `}
  />
)

export default Fonts
