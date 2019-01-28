import React from 'react'
import Pixel from './Pixel'

const App = () => {
  var pixel = []
  
  for(let i=0; i < 1000; i++){ 
    pixel.push(<Pixel key = {i}/>)
    console.log(pixel)
  }

  return (
    
    <div>
      
      {pixel}
     
      </div>
  )
}

export default App
