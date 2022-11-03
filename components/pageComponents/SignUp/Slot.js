import * as React from "react";
import styled from "styled-components";
import { availableSlots } from "../../utils/data/slots";

export const SlotBox = styled.div`
  width: 25%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  border-radius: 0.2rem;
  background-color: #b7d0ff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #5893ff;
  }

  background-color : ${(props) => (props.active ?  "#5893ff" : "")}
`;
const Slot = (props) => {
  const [active, setActive] = React.useState(null);
  const clickHandler = (item) => {
    props.onSelectSlot(item);
    setActive(item);
  };
  return (
    <>
      <>
        {availableSlots.map((item) => (
          <SlotBox
            key={item._id}
            onClick={() => clickHandler(item)}
            active={active == item}
          >
            <span
              style={{
                fontSize: "1rem",
              }}
            >
              {item.startTime}
            </span>
            &nbsp;-&nbsp;
            <span
              style={{
                fontSize: "1rem",
              }}
            >
              {item.endTime}
            </span>
          </SlotBox>
        ))}
      </>
    </>
  );
};

export default Slot;
