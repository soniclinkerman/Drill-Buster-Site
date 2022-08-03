import React from "react";
import shot1 from "../public/assets/screenshot-1.png";
import shot2 from "../public/assets/screenshot-2.png";
import shot3 from "../public/assets/screenshot-3.png";
import Card from "./Card";

const CardLayout = () => {
  return (
    <div className="card-wrapper">
      <Card
        title={"TEST YOUR RISK/REWARD SKILLS"}
        image={shot2}
        text="Collect coins to break barriers which allow you to progress in your journey. Will you take the safe route and get the bare minimum, or the risky route with a higher reward, but chance of losing it all?"
      />

      <Card
        title={"EXPLORE NEW TERRAINS"}
        image={shot3}
        text="Uncover unique environments filled with secrets as you encounter mischievious enemies and challenging puzzles on your mission to collect the element found within each biome."
        isOnLeft={true}
        className="card-reverse"
      />

      <Card
        title={"ADAPT AND OVERCOME"}
        image={shot1}
        text="Use quick decision making to adapt from your original plan when found in a sticky situation or see a golden oppurunity to get more than what you came for."
      />
    </div>
  );
};

export default CardLayout;
