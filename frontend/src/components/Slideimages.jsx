import React from "react";
import Hanuman from "../images/hanuman.jpg";
import Hod from "../images/house_of_dragon.jpg";
import Kong from "../images/kong.jpg";
import Lor from "../images/lordofring.jpg";
import Trans from "../images/transformer.jpg";
const Slideimages = () => {
  return (
    <>
      <div class="scroll" style={{ height: 300, width: 570 }}>
        <img src={Hanuman} alt="hanuman" height={290} width={200} />
        <img src={Hod} alt="hod" height={290} width={200} />
        <img src={Kong} alt="kong" height={290} width={200} />
        <img src={Lor} alt="lor" height={290} width={200} />
        <img src={Trans} alt="transformer" height={290} width={200} />
      </div>
    </>
  );
};

export default Slideimages;
