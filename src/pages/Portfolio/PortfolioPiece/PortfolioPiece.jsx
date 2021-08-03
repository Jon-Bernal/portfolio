import React from "react";

const PortfolioPiece = ({ name, back }) => {
  return (
    <div>
      <button onClick={back}>back</button>
      {name}
    </div>
  );
};

export default PortfolioPiece;
