import { Global } from '@emotion/react'

const GlobalStyle = () => (
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
        
        .grain:after{
          content:"";
          background-image:url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png");
          height: 300%;
          width: 300%;
          position: fixed;
          opacity:0.1;
           animation: animateGrain 8s steps(10) infinite;
        }

        @keyframes animateGrain{
          0%, 100% { transform:translate(0, 0) }
          10%{
            transform:translate(-5%,-10%)
          }
          20%{
            transform:translate(-15%,-20%)
          }
          30%{
            transform:translate(-5%,-10%)
          }
          40%{
            transform:translate(-15%,-20%)
          }
          
          50%{
            transform:translate(-5%,-10%)
          }
          60%{
            transform:translate(-15%,-20%)
          }
          70%{
            transform:translate(-5%,-10%)
          }
          80%{
            transform:translate(-15%,-20%)
          }
          90%{
            transform:translate(-5%,-10%)
          }
          100%{
            transform:translate(-15%,-20%)
          }
         
        }
        
      `}
  />
)

export default GlobalStyle
