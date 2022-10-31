import * as React from "react";
import { availableSlots } from "../../components/utils/data/slots";
import { SlotBox } from "../../components/pageComponents/Slots/style";

const Slot = () => {
  return (
    <>
      <>
        {availableSlots.map((item) => (
          <SlotBox key={item.id}>
            <span
              style={{
                fontSize: "1.2rem",
              }}
            >
              {item.start}
            </span>
            &nbsp;-&nbsp;
            <span
              style={{
                fontSize: "1.2rem",
              }}
            >
              {item.end}
            </span>
          </SlotBox>
        ))}
      </>
    </>
  );
};

export default Slot;
