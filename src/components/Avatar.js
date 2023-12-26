import React from "react";
import Part from "./Part";

function Avatar({
  body,
  clothing1,
  clothing2,
  clothing3,
  eyebrows,
  eyes,
  hair,
  hats,
  mouths,
  glasses,
}) {
  return (
    <div className="avatar">
      <Part path="body" index={body} zIndex={0} />
      <Part path="clothes/layer_1" index={clothing1} zIndex={1} />
      <Part path="clothes/layer_2" index={clothing2} zIndex={2} />
      <Part path="clothes/layer_3" index={clothing3} zIndex={3} />
      <Part path="eyes" index={eyes} zIndex={3} />
      <Part path="eyebrows" index={eyebrows} zIndex={3} />
      <Part path="mouths" index={mouths} zIndex={3} />
      <Part path="noses" index={1} zIndex={3} />
      <Part path="accessories/glasses" index={glasses} zIndex={4} />
      <Part path="hair" index={hair} zIndex={5} />
      <Part path="accessories/hats" index={hats} zIndex={6} />
    </div>
  );
}

export default Avatar;
