import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f6f9fe;
  padding-bottom: 2rem;
`;

export const SmallText = styled.p`
  font-size: 1.2rem;
  margin: 0;
  margin-top: 1rem;
`;

export const LargeText = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;

export const Helper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const HelperInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 1rem;
`;

export const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;