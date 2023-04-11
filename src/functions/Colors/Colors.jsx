import { data } from "../../constants";

const Colors = (type) => {
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

  return [colorLight, colorHigh];
};

export default Colors;
