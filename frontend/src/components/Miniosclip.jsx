import React from "react";
import Minion from "../video/Minions Movie TV SPOT - Stuart & Dave (2015) - Despicable Me Spin-Off HD.mp4";
const Miniosclip = () => {
  return (
    <>
      <video class="minion" controls>
        <source src={Minion} type="video/mp4" />
      </video>
    </>
  );
};

export default Miniosclip;
