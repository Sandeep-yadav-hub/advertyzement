import styled from "styled-components"

export const CardContainer = styled.div`
  display: grid;
  max-width: 100%;
  padding: 50px;
  @media screen and (min-width: 600px) {
    padding: 0px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 968px) {
    padding: 0px;
    grid-template-columns: repeat(5, 1fr);
  }

  > div {
    width: 220px;
    margin: 5px 5px 20px 10px;
    justify-self: center;
    border: 1px solid black;
    border-radius: 6px;
    padding: 5px;
    @media screen and (max-width: 960px) {
      width: 100%;
    }
    > h2 {
      font-size: 18px;
    }

    > img {
      border-radius: 50%;
      width: 100px;
    }

    > p {
      font-size: 14px;
    }
  }
`;

