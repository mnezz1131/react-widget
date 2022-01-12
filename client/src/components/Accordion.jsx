import React, {useState} from 'react'
import "./Accordion.css"

const Accordion = ({ items }) => {
  // export default class AccordionExampleStyled extends Component {
  //   state = { activeIndex: 0 }
  
  //   handleClick = (e, titleProps) => {
  //     const { index } = titleProps
  //     const { activeIndex } = this.state
  //     const newIndex = activeIndex === index ? -1 : index
  
  //     this.setState({ activeIndex: newIndex })
  // const [activeIndex, setActiveIndex] = useState(titleProps);
  //   }
  
  //   render() {
  //     const { activeIndex } = this.state
  
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
    console.log("clicked", index)
}

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''

    return <React.Fragment key= {item.title}>
      <div className={`title ${active}`}
      onClick = {() => onTitleClick(index)}
      >
        <i className='dropdown icon'></i>
        {item.title}
      </div>
      <div className = {`content ${active}`}>
        <p>{item.content }</p> 
    </div>
    </React.Fragment>
  })


return (
    <div className="ui style accordion">
    {renderedItems}  
    <h1>{ activeIndex} </h1>
    </div>
)




}

export default Accordion
