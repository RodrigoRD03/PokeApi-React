import React from "react";
import { data } from "../../constants";
import './PrintTypes.css';

const PrintTypes = ({ type }) => {
  var colorLight;
  var colorHigh;
  Object.keys(data.listLightColors).forEach((name) => {
    if (type === name) {
      colorLight = data.listLightColors[name];
    }
  });

  Object.keys(data.listHighColors).forEach((name) => {
    if (type === name) {
      colorHigh = data.listHighColors[name];
    }
  });

  return (
    <div className="app__printTypes-type" style={{
        background: `linear-gradient(45deg,${colorLight} 0%, ${colorHigh} 100%)`,
      }}>
      <p>{type}</p>
    </div>
  );
};

export default PrintTypes;
