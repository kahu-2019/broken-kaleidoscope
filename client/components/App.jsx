import React from 'react'
import Pixel from './Pixel'

const App = () => {

  var pixels = []
  for (var i = 0; i < 5000; i++) {
    pixels.push(<Pixel key={i} />)
  }
  return pixels
}

export default App
