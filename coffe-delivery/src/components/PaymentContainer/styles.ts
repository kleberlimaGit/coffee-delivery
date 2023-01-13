import styled from "styled-components";


export const PaymentComponent = styled.div`

    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 0 2rem 0;
    border-bottom: 1px solid ${props => props.theme["caqui-300"]};


.content{
    display: flex;
    gap: 0.5rem;
    flex: 1;

    div{
        flex: 1;
    }
    img{
        width: 4rem;
    }

.action-container{
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    span{
        padding: 4px 0;
    }
    .remove-button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        background-color: ${props => props.theme.sage};
        width: 60%;
        border-radius: 4px;
        color: ${props => props.theme.white};
        text-transform: uppercase;
        padding-right: 4px;
        cursor: pointer;
        transition: 0.3s background-color;
        font-size: 13px;
    }

    .remove-button:hover{
        background-color: ${props => props.theme["caqui-700"]};
    }
}
}
`