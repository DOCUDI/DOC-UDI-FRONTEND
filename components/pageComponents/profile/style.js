import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 6rem;
  background-color: #f6f9fe;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 15vh;
  padding: 1rem 3rem 1rem 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerPicContainer = styled.div`
  width: 7%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  overflow: hidden;
  margin-right: 2rem;
  border: 2px solid #5893ff;
`;
export const Content = styled.div`
  height: 30%;
  width: 100%;
`;
export const LargeContent = styled.h1`
  font-size: 2rem;
  padding: 0;
  margin: 0;
`;
export const SmallContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const SmallContent = styled.h4`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
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

export const MainContainer = styled.div`
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: black;
`;
export const BlueTile = styled.div`
  width: 50%;
  height: 5vh;
  background-color: #b7d0ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-right: 1rem;
`;
export const WhiteTile = styled.div`
  width: 50%;
  height: fit-content;
  background-color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
`;
export const HelperContainer = styled.div`
  width: 70%;
  height: 10vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
