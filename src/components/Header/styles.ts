import styled from "styled-components";

export const HeaderContainer = styled.header`
    /* background-color: #c4c4c4; */
    
`

export const Content = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    height: 90px;

    .input {
        background-color: var(--gray-100);
        border-radius: 5px;
        padding: 0 2rem;

        height: 2.6rem;

        display: flex;
        align-items: center;
        
        svg {
            color: var(--gray-500);
            margin-right: 1rem;
        }

        input {
            background: none;
            display: flex;
            align-items: center;

            
        }
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        cursor: pointer;
    }

    .infos {
        gap: 2rem;
        display: flex;
        align-items: center;

        div {
            border-right: 1px solid var(--gray-200);
            padding-right: 2rem;
        }

        button {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            height: 2.6rem;
            padding: 0 2rem;
            border-radius: 5px;
            background-color: var(--blue-500);
            color: var(--white);
            font-size: 1.2rem;

            &:hover {
                filter: brightness(0.95);
                transition: 0.4s;
            }
        }

      
    }

`