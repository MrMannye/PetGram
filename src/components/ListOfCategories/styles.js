import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
    margin-bottom: 2rem;
`;

export const Item = styled.li`
    padding: 0 8px;
`;