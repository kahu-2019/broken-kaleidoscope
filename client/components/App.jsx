import React from 'react'
import Pixel from './Pixel'

const App = () => {
  var pixel = []
  for (let i = 0; i < 100000; i++) {
    pixel.push(<Pixel key={i} />)
  }
  return (
    <div>
      {pixel}
    </div>
  )
}

export default App
