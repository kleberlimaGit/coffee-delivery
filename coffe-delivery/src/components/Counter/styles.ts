import styled from "styled-components";


export const CounterComponent = styled.div `

display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.theme.sage};
padding: 4px 8px;
border-radius: 4px;

font-weight: bold;
button {
    background-color: transparent;
    border: 0;
    outline: 0;
    color: ${props => props.theme.white};
    cursor: pointer;
}



`

