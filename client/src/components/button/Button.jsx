import React, {useState} from 'react'

function Button() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("Click Me")
  
  const onButton = () => {
    setCount(count + 1)  

  
  }
  const changeClick = () => {
    console.log("clicked")
  setTitle("I done been clicked. Dang!")
}

  


  return (
    <div>
      <button className='myButton' onClick={onButton}>
        Click this MotherFucker!
      </button>    
      <h1>Current : {count}</h1>
  

      <br/>
     
      <button onClick={changeClick} className="title">
        {title}
      </button>
      <br />
      
     
   
      

    </div>

  



    
    
  )
}

export default Button
