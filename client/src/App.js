
import './App.css';
import React from 'react'
import { useState } from 'react';
import Accordion from './components/Accordion';
import Button from './components/button/Button';
import Dropdown from './components/Dropdown/Dropdown';
import Search from './components/List/Search';

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework"
  },
  {
    title: "Why Use React?",
    content: "React is a favorite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components."
  }
]
const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'A shade of Blue',
    value: 'blue'
  }
]

function App() {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="App">
      <br/>
      <Accordion items={items} />
      < br />
 

      <br/>
      <br/>
      <Search />
      <br />
      <button onClick={() => setShowDropdown(!showDropdown)}> Toggle Dropdown</button>
      {showDropdown ? 
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        /> : null
      }
     <br/>
      <Button />
     
    </div>
  );
}

export default App;
