import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
       --blue-900: #090422;
       --blue-500: #4055F6;
       --blue-300: #42C2ED;
       --gray-50: #FAFAFA;
       --white: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    // font-size 16px (Desktop)

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        @media(max-width: 400px) {
            font-size: 81.125%;
        }
        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: var(--gray-50);
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;

        font-family: Roboto;
    }

     h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
        font-family: Poppins;
    }

    button, input {
        font-family: Poppins;
        font-weight: 700;
    }

    li {
        text-decoration: none;
        list-style: none;

        color: var(--white);
        font-family: Poppins;
        font-weight: 600;
    }
`