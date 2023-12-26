import React from "react";

function Part({ path, index, zIndex }) {
  return (
    <img
      src={`character/${path}/${index}.png`}
      alt={path}
      style={{ zIndex }}
    ></img>
  );
}

export default Part;
