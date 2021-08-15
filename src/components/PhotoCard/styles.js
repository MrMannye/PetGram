import styled from 'styled-components'
import { fadeIn } from '../../styles/animations';

export const Article = styled.article`
    padding: 1rem;
    margin-bottom: 2rem;
    min-height:200px;
`;

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0; 
    position: relative;
    width: 100%;
    margin-bottom: 0.5rem;
`;

export const Img = styled.img`
    ${fadeIn({time:'5s'})};
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    height: 100%;
    object-fit: cover; 
    position: absolute;
    top: 0;
    width: 100%;
`;

export const Button = styled.button`
    padding-top: 8px;
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    align-items: center;
    & svg {
        margin-right: 4px;
        transition: all 0.4s;
    }
    :hover{
        svg{
            color:red;
        }
    }
`;
