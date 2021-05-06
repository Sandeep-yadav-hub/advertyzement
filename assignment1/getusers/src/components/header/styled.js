import styled from "styled-components"

export const HeaderContainer = styled.div`
    display:flex;
    max-width:100%;
    height:40px;
    background-color:black;
    padding:20px 20px;
    justify-content:space-between;
    >img{
        cursor:pointer;
    }
    >button{
        padding:5px 30px;
        color:white;
        background-color:black;
        border:1px solid white;
        border-radius:6px;
        cursor: pointer;
        :hover{
            background-color:white;
            color:black;
        }
    }
`;