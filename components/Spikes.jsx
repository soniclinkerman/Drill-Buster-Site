import React, { useRef } from "react";
import SpikesStyled from "../components.styled/Spikes.styled";

import { useIntersectionObserver } from "usehooks-ts";

// flip: h | v
const Spikes = ({ className, light, flip }) => {
  const ref = useRef();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  if (isVisible) {
    ref.current.style.animation = "spikesSlide 1s ease-in-out";
  }

  return (
    <SpikesStyled
      className={`${light ? "light" : ""} ${flip ? "flip--" + flip : ""} ${
        className || ""
      }`}
      light={light}
    >
      <svg
        ref={ref}
        viewBox="0 0 1201 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 61.0569V129.091L1201 162V9.73112L1178.12 38.9553L1135.14 0L1101.71 42.7045L1059.16 4.13953L1026.07 46.4129L983.087 7.45248L949.655 50.1594L907.107 11.5942L874.014 53.8678L831.031 14.9074L797.6 57.6142L755.052 19.049L721.959 61.3226L678.976 22.3621L645.544 65.069L602.996 26.5041L569.904 68.7775L526.921 29.817L493.489 72.5238L450.942 33.9591L417.849 76.2323L374.867 37.2718L341.434 79.9786L298.886 41.4136L265.794 83.6871L222.812 44.7275L189.379 87.4335L146.831 48.8684L113.739 91.1419L70.7562 52.1815L37.3241 94.8883L0 61.0569Z"
          fill="black"
        />
      </svg>
    </SpikesStyled>
  );
};

export default Spikes;
