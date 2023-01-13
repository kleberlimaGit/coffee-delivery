import styled from "styled-components";

export const FormComponent = styled.div`

h4{
    font-weight: normal;
}

form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.title-address{
    display: flex;
    line-height: 1.5;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 1.2rem;
    p{
        font-size: 0.875rem;
    }
    div{
        line-height: 1;
        flex-direction: column;
    }

    svg{
        color: ${props => props.theme["caqui-400"]};
    }
}

.container-dados-pessoais{
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    margin-bottom: 0.5rem;
    background-color: ${props => props.theme["gray-100"]};
    

    padding: 3rem 2rem;
    border-radius: 6px;
    input{
        border: 0.3px solid ${props => props.theme["gray-300"]};;
        outline: 0;
        height: 2.5rem;
        border-radius:4px;
        padding-left: 0.5rem;
        background-color: ${props => props.theme["gray-200"]};
    }

    input:focus {
        border: 1.8px solid ${props => props.theme["caqui-300"]};
    }

    input[name="cep"]{
        width: 14rem;
    }

   div{
        display: flex;
        gap: 0.75rem;
    }
    input[name="cidade"] {
        flex: 1;
    }
    .complemente-container{
        position: relative;
        flex: 1;
    }

    input[name="complemento"]{
        width: 100%;
    }

    small{
        font-family: sans-serif;
        font-style: italic;
        position: absolute;
        opacity: 0.8;
        top: 5px;
        right: 0;
        transform: translate(-50%,51%);
        display: inherit;
    }

    small.hasContent{
        display: none;
    }

    input[name="uf"]{
        width: 4rem;
    }

    .street input{
        width: 100%;
}

}

.container-dados-pagamento{

display: flex;
flex-direction: column;
gap: 0.875rem;
background-color: ${props => props.theme["gray-100"]};


padding: 3rem 2rem;
border-radius: 6px;

.payment-text{
    display: flex;
    gap: 0.2rem;
    line-height: 1.3;

    svg{
        color: ${props => props.theme["caqui-300"]};
    }

    p{
        font-size: 0.875rem;
    }
}

.payment-type{
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
    justify-content: space-between;

    label:nth-child(3){
        margin: 0 1rem;
    }

    label{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme["caqui-300"]};
        padding: 8px 16px;
        width: 12rem;
        height: 3rem;
        border-radius: 6px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s background-color;
    }
    label:hover{
        background-color: ${props => props.theme["caqui-400"]};
        color: ${props => props.theme["caqui-100"]};

    }

    input{
        display: none;
    }

    input[type="radio"]:checked  + label{
        background-color: ${props => props.theme["caqui-400"]};
        border: 3px solid ${props => props.theme["caqui-700"]};
        color: ${props => props.theme["caqui-100"]};
        outline: 0;
    }

    svg{
        margin-right: 0.5rem;
    }
}

}
`