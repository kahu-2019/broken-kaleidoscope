import React from 'react'
import Pixel from './Pixel'

const App = () => {
  var pixels = []
  for (var i = 0; i < 22472; i++) {
    pixels.push(<Pixel />)
  }

  return (
    <div>
      {pixels}
    </div>
  )
}

export default App