import styled from "styled-components";

export const CoffeComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

.tag-container {
    display: flex;
    align-items: center;
    gap: 1px;

    small{
      background-color: ${(props) => props.theme["caqui-300"]};
      color: ${(props) => props.theme.blue};

      border-radius: 4px;
      padding: 2px 8px;

      margin: 0.875rem 0;
      display: inline-block;
      font-weight: bold;

    }
  }
  p {
    font-family: 'Baloo 2', cursive;
    font-size: 1.2rem;
  }

  .description{
    text-align: center;
    margin-bottom: 1rem;
  }

  .coffee-value-container{
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .coffee-value {
        font-weight: bold;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
        flex: 1;


    }

    .cart {
            background-color: ${props => props.theme["caqui-400"]};
            color: ${props => props.theme["caqui-100"]};
            padding: 4px 6px;
            border-radius:4px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: none;
            text-decoration: none;

        }
  }
`;
