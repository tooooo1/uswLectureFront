import styled from 'styled-components';

export const Wrapper = styled.button`
    margin: 0;
    width: 100%;
    padding: 0 1rem;
    padding-top: 0.6rem;
    border:none;
    padding-bottom: 0.5rem;
    background: #4b89dc;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
    transition: .3s all;
    &:hover, &:active {
        background: #4b10f2;
    }
    &:disabled {
        background-color: rgba(170,170,170);
        cursor : auto;
    }
`;