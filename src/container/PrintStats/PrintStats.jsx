import React from "react";
import "./PrintStats.css";
import { data } from "../../constants";

const PrintStats = ({ stat }) => (
  <div className="app__printStates-state">
    <p>{stat.stat.name}</p>
    <div className={`iconState color_${stat.stat.name}`}>
      {data.statIcons[stat.stat.name]}
    </div>
    <div className="app__printState-section">
      <p>{stat.base_stat}pts</p>
      <div
        className={`backgroundColor_${stat.stat.name}`}
        style={{
          width: `${stat.base_stat}px`,
          height: "20px",
          borderRadius: "50vh",
        }}
      />
    </div>
  </div>
);
export default PrintStats;
