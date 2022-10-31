import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6rem;
`;

export const ContentContainer = styled.div`
  width: 50%;
  height: 60vh;
  padding: 1rem 3rem 1rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  height: 30%;
  width: 100%;
`;
export const LargeContent = styled.h1`
  text-align: left;
  font-size: 2.5rem;
  padding: 0;
  margin: 0;
`;
export const SmallContent = styled.h4`
  text-align: left;
  font-size: 1.3rem;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;
export const ButtonGroup = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 60vh;
  padding: 1rem 5rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
