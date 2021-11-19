export const decToHex = (rgb) => {
  let hex = "#";
  rgb.forEach((i, k) => {
    hex = "" + hex + (Number(i).toString(16).length < 2 ? "0" + Number(i).toString(16) : Number(i).toString(16));
  });
  return hex;
};
