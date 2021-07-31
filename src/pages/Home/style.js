import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: 100vh;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-around;

  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-block-start: 50px;
`;

export const Header = styled.div`
  display: flex;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 400px;
  width: 100%;
`;
