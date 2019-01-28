import React from 'react'
import Pixel from './Pixel'


const App = () => {
  const pixel = []
  for (var i=0; i<880; i++) { pixel.push( <Pixel /> ) }

  return (
    <div>
      {pixel}
    </div>
  )
}

export default App
