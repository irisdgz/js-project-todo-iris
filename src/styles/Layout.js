import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 60px 20px;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 600px;
  margin-bottom: 40px;
  
  h1 {
    font-size: 66px;
    font-weight: 800;
    margin: 0;
    color: #000;
    letter-spacing: -2px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 42px;
    }
  }

  p {
    color: #000;
    font-size: 14px;
    margin-top: 5px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;