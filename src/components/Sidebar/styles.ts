import styled from "styled-components";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;

    align-items: center;

    max-width: 24rem;
    width: 100%;
    height: 100vh;

    padding: 2rem;

    background: var(--blue-900);

  img {
      width: 80px;
      margin-top: -50px;
  }

  nav {

    margin-top: 4rem;

      li {
        font-size: 1.4rem;

        display: flex;
        align-items: center;

        cursor: pointer;

        gap: 16px;

        & + li {
            margin-top: 2rem;
        }

      }
  }

`