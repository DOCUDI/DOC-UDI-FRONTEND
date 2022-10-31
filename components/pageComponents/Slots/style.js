/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SlotsBoxContainer = styled.div`
  height: fit-content;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 3rem;

`;

export const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const SlotBox = styled.div`
  width: 25%;
  height: 15vh;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  border-radius: 1rem;
  background-color: #B7D0FF;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: 
    #5893FF;
  }
  &:active {
    background-color: 
    #5893FF;
  }

`;

export const Content = styled.h2``;
