import styled from "styled-components";

export const FormComponent = styled.div`
  .form-container {
    display: grid;
    grid-template-columns: 2fr 1.3fr;
    gap: 2rem;
    margin-top: 2.5rem;
  }

  h3 {
    font-family: "Baloo 2", cursive;
    margin-bottom: 1rem;
  }

  h4 {
    font-weight: normal;
  }

  .title-address {
    display: flex;
    line-height: 1.5;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 1.2rem;
    p {
      font-size: 0.875rem;
    }
    div {
      line-height: 1;
      flex-direction: column;
    }

    svg {
      color: ${(props) => props.theme["caqui-400"]};
    }
  }

  .container-dados-pessoais {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    margin-bottom: 1rem;
    background-color: ${(props) => props.theme["gray-100"]};

    padding: 3rem 2rem;
    border-radius: 6px;
    input {
      border: 0.3px solid ${(props) => props.theme["gray-300"]};
      outline: 0;
      height: 2.5rem;
      border-radius: 4px;
      padding-left: 0.5rem;
      background-color: ${(props) => props.theme["gray-200"]};
    }

    input:focus {
      border: 1.8px solid ${(props) => props.theme["caqui-300"]};
    }

    input[name="cep"] {
      width: 14rem;
    }

    div {
      display: flex;
      gap: 0.75rem;
    }
    input[name="cidade"] {
      flex: 1;
    }
    .complemente-container {
      position: relative;
      flex: 1;
    }

    input[name="complemento"] {
      width: 100%;
    }

    small {
      font-family: sans-serif;
      font-style: italic;
      position: absolute;
      opacity: 0.8;
      top: 5px;
      right: 0;
      transform: translate(-50%, 51%);
      display: inherit;
    }

    small.hasContent {
      display: none;
    }

    input[name="uf"] {
      width: 4rem;
    }

    .street input {
      width: 100%;
    }
  }

  .container-dados-pagamento {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    background-color: ${(props) => props.theme["gray-100"]};

    padding: 3rem 2rem;
    border-radius: 6px;

    .payment-text {
      display: flex;
      gap: 0.2rem;
      line-height: 1.3;

      svg {
        color: ${(props) => props.theme["caqui-300"]};
      }

      p {
        font-size: 0.875rem;
      }
    }

    .payment-type {
      display: flex;
      margin-top: 2rem;
      gap: 1rem;
      justify-content: space-between;

      label:nth-child(3) {
        margin: 0 1rem;
      }

      label {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.theme["caqui-300"]};
        padding: 8px 16px;
        width: 12rem;
        height: 3rem;
        border-radius: 6px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s background-color;
      }
      label:hover {
        background-color: ${(props) => props.theme["caqui-400"]};
        color: ${(props) => props.theme["caqui-100"]};
      }

      input {
        display: none;
      }

      input[type="radio"]:checked + label {
        background-color: ${(props) => props.theme["caqui-400"]};
        border: 3px solid ${(props) => props.theme["caqui-700"]};
        color: ${(props) => props.theme["caqui-100"]};
        outline: 0;
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }

  
`;

export const OrderPaymentContainer = styled.div`
background-color: ${props => props.theme["gray-100"]};
min-height: 30rem;
border-radius: 8px 32px;
padding: 1.5rem 1.5rem 2.5rem;
display: flex;
flex-direction: column;
.payment-data-container:nth-child(1){
  margin-top: 1rem;
}
.payment-data-container{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.75rem;
    
    span{
      font-size: 0.75rem;
    }
}

.btn-submit{
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 0.7rem 0;
  border-radius: 4px;
  background-color: ${props => props.theme["caqui-400"]};
  color: ${props => props.theme.blue};
  font-weight: bold;
  transition: 0.3s background-color;
  margin-top: 1rem;

  &:hover{
    background-color: ${props => props.theme["caqui-300"]};
  }
}

`
