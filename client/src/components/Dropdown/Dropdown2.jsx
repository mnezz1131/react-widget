import React from "react";
import { useState, useEffect, useRef } from "react";
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];

function Dropdown2() {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   document.body.addEventListener(
  //     "click",
  //     (event) => {
  //       if (ref.current.contains(event.target)) {
  //         return;
  //       }
  //       setOpen(false);
  //     },
  //     { capture: true }
  //   );
  // }, []);

  const renderedOptions = options.map((option) => {
    //null - don't render anything.  if red is the selected one when rendering don't create div with red as selection
    if (selected.value === option.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        onClick={() => setSelected(option)}
        //when div is clicked updates selected piece of state causing component to rerender
        //shows newly selected label options
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <h1>DROPDOWN2</h1>
      <div className="ui form">
        <div className="field">
          <label className="label">Select a color</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown2;
