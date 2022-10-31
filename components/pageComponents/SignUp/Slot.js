import * as React from "react";
import { availableSlots } from "../../utils/data/slots";
import { SlotBox } from "../Slots/style";

const Slot = props => {
  // const[click, setClick] = React.useState(false);
  const clickHandler = item => {
    // setClick(!click);
    // console.log(item);
    props.onSelectSlot(item);
  }
  return (
    <>
      <>
        {availableSlots.map((item) => (
          <SlotBox key={item._id} onClick={() => clickHandler(item)} >
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
