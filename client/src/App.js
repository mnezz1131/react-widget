
import './App.css';
import Accordion from './components/Accordion';
import Button from './components/button/Button';
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

function App() {
  return (
    <div className="App">
      <br/>
      <Accordion items={items} />
      <Button />
      < br />
      <Search />
    
    </div>
  );
}

export default App;
