import styled from "styled-components";

export const Container = styled.div`
    
    width: 90%;
    max-width: 1200px;
    margin: 2rem auto;

`

export const Content = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
`

export const Post = styled.div`

    width: 300px;

    padding: 1rem;

    background-color: var(--white);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.10);
    border: 1px solid #EFEFEF;

    img {
        width: 100%;
        border-radius: 10px;
    }

    footer {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            width: 40px;
            height: 40px;
            border-radius: 100%;
        }

        .engagement {
            display: flex;
            align-items: center;
            gap: 16px;

            .icon {
                display: flex;
                align-items: center;
            }
        }
    }
`