import React, { useState, useEffect, useRef } from "react";

function Dropdown({ options, selected, onSelectedChange }) {
  const [open, setOpen] = useState(false);
  //if dropdown is true then it will open, if false it will closed.  starts off closed.

  //ref will be an object
  const ref = useRef();

  useEffect(() => {
    //event.target will console the specific element that was clicked
    //  console.log (event.target, "BODY CLICK!")

    //  going to see if element that was clicked was inside our component
    //if element was clicked inside the compoment then return early doing nothing
    //,contains belongs to all dom elements.  This lets us see if one element is contained inside another
    //Get reference to top element
    const onBodyClick =((event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    },
    { capture: true })
      
    document.body.addEventListener("click", onBodyClick);

    //cleanup function
    return () => {
      document.body.removeEventListener('click', onBodyClick)
    };
  }, []);

  const renderedOptions = options.map((option) => {
    //selected is the state. Initially set to options[0]
    //option is an array of objects. Each object has a title and content key variable pair.  Check to see if selected item is equal to the on we are currently iterating over.  Null in react means don't render anything

    //if color red is selected, when we go to render the color red, dont render a div, show nothing on the screen

    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          console.log("ITEM CLICKED");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  // console.log(ref.current)
  return (
    <div>
      <h1>Dropdown</h1>
      {/* after component is rendered we can get refence to that div with rer.current */}
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">Select a color</label>
          <div
            onClick={() => {
              console.log("DROPDOWN CLICKED");
              setOpen(!open);
            }}
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

export default Dropdown;
