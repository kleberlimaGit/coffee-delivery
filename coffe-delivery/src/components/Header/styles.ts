import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  img {
    width: 4.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  div span, button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div span:first-child {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    gap: 2px;
  }

  div button{
    color: ${(props) => props.theme["caqui-100"]};
    background-color: ${(props) => props.theme["caqui-300"]};
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    position: relative;

    cursor: pointer;

    border: 0;
    outline: 0;

    .shoppingCart-alert {
      position: absolute;
      background-color: ${props => props.theme["salmon"]};
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      top: -8px;
      right: -8px;
      opacity: 0;

      &.active {
        opacity: 1;
      }
    }
  }
`;


