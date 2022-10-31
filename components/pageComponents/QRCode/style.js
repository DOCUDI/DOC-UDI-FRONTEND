/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const QRBoxContainer = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 3rem;

`;

export const QRBox = styled.div`
  height: 65vh;
  width: 80%;
  border: 1px solid ${props => props.borderColor};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  
`;

export const Content = styled.h2``;
