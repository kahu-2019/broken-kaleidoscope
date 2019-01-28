import React from 'react'
import Pixel from './Pixel'

const App = () => {

  var pixels = []
  for (var i = 0; i < 301; i++) {
    pixels.push(<Pixel />)
  }

  return (
    <div style={{
      width: "100%",
    }}>

      {pixels}

    </div >
  )
}

export default App
