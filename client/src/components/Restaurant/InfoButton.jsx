import React from "react";
import classnames from "classnames";

function InfoButton(props) {
  return (
    <>
      <button
        className={classnames(
          "flex items-center gap-3 border border-delishGrab-400 px-4 py-2 rounded-lg",
          {
            "bg-delishGrab-400 text-white": props.isActive,
          }
        )}
      >
        {props.children}
      </button>
    </>
  );
}

export default InfoButton;
