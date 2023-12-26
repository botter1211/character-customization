import React from "react";

function PartList({ total, set, selected, path }) {
  let parts = [];
  for (let i = 1; i <= total; i++) {
    parts.push(
      <div
        key={path + i}
        className={selected === i ? "selected clickItem" : "clickItem"}
        onClick={() => set(i)}
      >
        <img src={`character/${path}/${i}.png`} alt="body"></img>
      </div>
    );
  }
  return <div className="list">{parts}</div>;
}

export default PartList;
